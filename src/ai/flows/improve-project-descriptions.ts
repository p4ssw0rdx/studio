'use server';

/**
 * @fileOverview A flow that analyzes project descriptions and suggests improvements for clarity and impact.
 *
 * - improveProjectDescription - A function that accepts a project description and returns improved suggestions.
 * - ImproveProjectDescriptionInput - The input type for the improveProjectDescription function.
 * - ImproveProjectDescriptionOutput - The return type for the improveProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project to be analyzed.'),
});
export type ImproveProjectDescriptionInput = z.infer<typeof ImproveProjectDescriptionInputSchema>;

const ImproveProjectDescriptionOutputSchema = z.object({
  improvedDescription: z
    .string()
    .describe('The improved description of the project.'),
  suggestions: z.array(z.string()).describe('Specific suggestions for improvement.'),
});
export type ImproveProjectDescriptionOutput = z.infer<typeof ImproveProjectDescriptionOutputSchema>;

export async function improveProjectDescription(
  input: ImproveProjectDescriptionInput
): Promise<ImproveProjectDescriptionOutput> {
  return improveProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveProjectDescriptionPrompt',
  input: {schema: ImproveProjectDescriptionInputSchema},
  output: {schema: ImproveProjectDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in engineering projects. You will analyze the provided project description and suggest improvements to make it clearer and more impactful. Provide an improved description and a list of specific suggestions.

Project Description: {{{projectDescription}}}

Respond in markdown format.`,
});

const improveProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'improveProjectDescriptionFlow',
    inputSchema: ImproveProjectDescriptionInputSchema,
    outputSchema: ImproveProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
