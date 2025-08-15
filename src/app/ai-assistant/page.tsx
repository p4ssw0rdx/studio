"use client";

import { useState } from "react";
import { improveProjectDescription, type ImproveProjectDescriptionOutput } from "@/ai/flows/improve-project-descriptions";
import { generateFloorPlan, type GenerateFloorPlanInput, type GenerateFloorPlanOutput } from "@/ai/flows/generate-floor-plan";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Lightbulb, Loader2, PenSquare, LayoutTemplate } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

function ProjectDescriptionEnhancer() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImproveProjectDescriptionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Por favor, insira uma descrição para ser analisada.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const output = await improveProjectDescription({ projectDescription: description });
      setResult(output);
    } catch (err) {
      setError("Ocorreu um erro ao analisar a descrição. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const exampleDescription = "Fizemos um prédio de 10 andares no centro da cidade. Usamos concreto e aço. A obra durou 2 anos e o cliente gostou. O prédio tem escritórios e uma loja no térreo.";

  return (
      <Card className="shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><PenSquare /> Aprimorar Descrição de Projeto</CardTitle>
            <CardDescription>
              Cole a descrição do seu projeto abaixo para receber sugestões de melhoria.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={exampleDescription}
              rows={8}
              className="resize-none"
              disabled={loading}
            />
            {error && <p className="text-sm font-medium text-destructive mt-2">{error}</p>}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="button" variant="ghost" onClick={() => {setDescription(""); setResult(null)}} disabled={loading}>Limpar</Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analisar com AI
            </Button>
          </CardFooter>
        </form>

        {result && (
          <div className="mt-8 p-6 pt-0 space-y-8">
            <h2 className="text-center font-headline text-3xl font-bold">Resultados da Análise</h2>
            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Descrição Aprimorada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground whitespace-pre-wrap">{result.improvedDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Lightbulb className="text-primary"/> Sugestões de Melhoria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </Card>
  )
}

function FloorPlanGenerator() {
  const [form, setForm] = useState<GenerateFloorPlanInput>({
    projectType: "Casa Térrea",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    style: "Moderno",
    otherDetails: "Cozinha em conceito aberto e uma pequena varanda gourmet.",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateFloorPlanOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'area' || name === 'bedrooms' || name === 'bathrooms' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const output = await generateFloorPlan(form);
      setResult(output);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ocorreu um erro desconhecido.";
      setError(`Falha ao gerar planta. ${errorMessage}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2"><LayoutTemplate /> Gerador de Plantas Baixas</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para gerar uma ideia de planta baixa com base nas suas necessidades.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Tipo de Projeto</Label>
              <Input id="projectType" name="projectType" value={form.projectType} onChange={handleInputChange} placeholder="Ex: Casa Térrea, Sobrado" disabled={loading} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="style">Estilo Arquitetônico</Label>
              <Input id="style" name="style" value={form.style} onChange={handleInputChange} placeholder="Ex: Moderno, Clássico" disabled={loading} />
            </div>
          </div>
           <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="area">Área (m²)</Label>
              <Input id="area" name="area" type="number" value={form.area} onChange={handleInputChange} placeholder="120" disabled={loading}/>
            </div>
             <div className="space-y-2">
              <Label htmlFor="bedrooms">Quartos</Label>
              <Input id="bedrooms" name="bedrooms" type="number" value={form.bedrooms} onChange={handleInputChange} placeholder="3" disabled={loading}/>
            </div>
             <div className="space-y-2">
              <Label htmlFor="bathrooms">Banheiros</Label>
              <Input id="bathrooms" name="bathrooms" type="number" value={form.bathrooms} onChange={handleInputChange} placeholder="2" disabled={loading}/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="otherDetails">Outros Detalhes</Label>
            <Textarea id="otherDetails" name="otherDetails" value={form.otherDetails} onChange={handleInputChange} placeholder="Ex: Cozinha integrada, escritório, área gourmet..." disabled={loading}/>
          </div>
          {error && <p className="text-sm font-medium text-destructive mt-2">{error}</p>}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Gerar Planta Baixa
          </Button>
        </CardFooter>
      </form>
       {result && (
          <div className="mt-8 p-6 pt-0 space-y-8">
            <h2 className="text-center font-headline text-3xl font-bold">Planta Baixa Gerada</h2>
            <Card className="border-primary/50 border-2">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Planta Baixa</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                 <Image src={result.imageDataUri} alt="Planta baixa gerada" width={512} height={512} className="rounded-md shadow-md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Descrição do Projeto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap">{result.description}</p>
              </CardContent>
            </Card>
          </div>
        )}
    </Card>
  )
}

export default function AiAssistantPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Bot className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Assistente AI para Engenharia</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Utilize nossas ferramentas de Inteligência Artificial para otimizar seus projetos, desde o aprimoramento de descrições até a geração de ideias para plantas baixas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="floor-plan" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="floor-plan">Gerador de Plantas</TabsTrigger>
                <TabsTrigger value="description-enhancer">Aprimorar Descrição</TabsTrigger>
              </TabsList>
              <TabsContent value="floor-plan" className="mt-6">
                <FloorPlanGenerator />
              </TabsContent>
              <TabsContent value="description-enhancer" className="mt-6">
                <ProjectDescriptionEnhancer />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
