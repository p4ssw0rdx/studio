'use server';

/**
 * @fileOverview A flow that generates floor plan ideas, including a description and an image, based on user specifications.
 *
 * - generateFloorPlan - A function that takes user requirements and returns a floor plan description and image.
 * - GenerateFloorPlanInput - The input type for the generateFloorPlan function.
 * - GenerateFloorPlanOutput - The return type for the generateFloorPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFloorPlanInputSchema = z.object({
  projectType: z.string().describe('The type of project (e.g., "Casa Térrea", "Apartamento", "Sobrado").'),
  area: z.number().describe('The total area in square meters.'),
  bedrooms: z.number().describe('The number of bedrooms.'),
  bathrooms: z.number().describe('The number of bathrooms.'),
  style: z.string().describe('The desired architectural style (e.g., "Moderno", "Clássico", "Industrial").'),
  otherDetails: z.string().describe('Any other specific details or requests.'),
});
export type GenerateFloorPlanInput = z.infer<typeof GenerateFloorPlanInputSchema>;

const GenerateFloorPlanOutputSchema = z.object({
  description: z.string().describe('A detailed description of the generated floor plan.'),
  imageDataUri: z.string().describe('A data URI of the generated floor plan image.'),
});
export type GenerateFloorPlanOutput = z.infer<typeof GenerateFloorPlanOutputSchema>;

export async function generateFloorPlan(
  input: GenerateFloorPlanInput
): Promise<GenerateFloorPlanOutput> {
  return generateFloorPlanFlow(input);
}

const imageSystemPrompt = `Você é um arquiteto e engenheiro especialista em projetar plantas baixas residenciais. O usuário fornecerá os requisitos e você deve gerar uma imagem da planta baixa.
Instruções para a imagem:
- Crie uma imagem de planta baixa 2D, vista de cima.
- O fundo deve ser branco.
- As paredes devem ser pretas e espessas.
- Inclua rótulos claros para cada cômodo (e.g., 'Quarto 1', 'Cozinha', 'Banheiro').
- Mostre a disposição dos móveis principais (cama, sofá, mesa de jantar, etc.).
- Inclua as dimensões gerais da propriedade.`;

const descriptionSystemPrompt = `Você é um arquiteto e engenheiro especialista em projetar plantas baixas residenciais. Com base nos requisitos do usuário, gere uma descrição detalhada e inspiradora para a planta baixa.
Instruções para a descrição:
- Descreva a distribuição dos cômodos, o fluxo entre eles e como o design atende aos requisitos do usuário.
- Destaque as características e benefícios do projeto.
- Seja profissional e inspirador.
- Responda em português do Brasil.`;


const generateFloorPlanFlow = ai.defineFlow(
  {
    name: 'generateFloorPlanFlow',
    inputSchema: GenerateFloorPlanInputSchema,
    outputSchema: GenerateFloorPlanOutputSchema,
  },
  async (input) => {
    const userPrompt = `Tipo de Projeto: ${input.projectType}, Área: ${input.area}m², Quartos: ${input.bedrooms}, Banheiros: ${input.bathrooms}, Estilo: ${input.style}, Detalhes Adicionais: ${input.otherDetails}`;

    // Generate Image and Description in parallel
    const [imageResult, descriptionResult] = await Promise.all([
      ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
          {text: imageSystemPrompt},
          {text: `Gere a imagem da planta baixa para: ${userPrompt}`},
        ],
        config: {
          responseModalities: ['IMAGE'],
        },
      }),
      ai.generate({
        model: 'googleai/gemini-2.0-flash',
        prompt: [
          {text: descriptionSystemPrompt},
          {text: `Gere a descrição para: ${userPrompt}`},
        ]
      })
    ]);
    
    const { media } = imageResult;
    const { text } = descriptionResult;


    if (!media?.url || !text) {
      throw new Error('Falha ao gerar a planta baixa. A resposta do modelo foi inválida.');
    }

    return {
      description: text,
      imageDataUri: media.url,
    };
  }
);
