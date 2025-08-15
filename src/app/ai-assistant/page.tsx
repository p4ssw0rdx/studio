"use client";

import { useState } from "react";
import { improveProjectDescription, type ImproveProjectDescriptionOutput } from "@/ai/flows/improve-project-descriptions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Lightbulb, Loader2 } from "lucide-react";

export default function AiAssistantPage() {
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
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Bot className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Assistente AI para Portfólio</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Utilize nossa ferramenta de Inteligência Artificial para analisar e aprimorar as descrições dos seus projetos, tornando seu portfólio mais claro, profissional e impactante.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Analisar Descrição de Projeto</CardTitle>
                  <CardDescription>
                    Cole a descrição do seu projeto abaixo e clique em "Analisar" para receber sugestões de melhoria.
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
                  <Button type="button" variant="ghost" onClick={() => setDescription("")} disabled={loading}>Limpar</Button>
                  <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Analisar com AI
                  </Button>
                </CardFooter>
              </form>
            </Card>

            {result && (
              <div className="mt-12 space-y-8">
                <h2 className="text-center font-headline text-3xl font-bold">Resultados da Análise</h2>
                <Card className="border-primary border-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">Descrição Aprimorada</CardTitle>
                    <CardDescription>
                      Esta é uma versão reescrita da sua descrição, com foco em clareza, profissionalismo e impacto.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground whitespace-pre-wrap">{result.improvedDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2"><Lightbulb className="text-primary"/> Sugestões de Melhoria</CardTitle>
                    <CardDescription>
                      Pontos específicos que você pode considerar para tornar suas descrições ainda melhores.
                    </CardDescription>
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
          </div>
        </div>
      </section>
    </div>
  );
}
