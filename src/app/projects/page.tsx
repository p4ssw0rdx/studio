import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Edificações Comerciais",
    title: "Torre Corporativa Axis",
    description: "Projeto estrutural e gerenciamento de obra para um dos edifícios mais altos da cidade, utilizando concreto protendido e fundações profundas para otimizar o espaço e a segurança.",
    image: "https://placehold.co/600x400.png",
    hint: "tall skyscraper",
    testimonial: "A Engenharia Inovadora foi fundamental para o sucesso do projeto. A expertise técnica e o compromisso com o prazo foram impecáveis."
  },
  {
    category: "Residencial de Alto Padrão",
    title: "Condomínio Solaris",
    description: "Desenvolvimento completo, desde a terraplanagem até as instalações, de um condomínio com 5 torres residenciais, priorizando o conforto e a sustentabilidade.",
    image: "https://placehold.co/600x400.png",
    hint: "luxury apartment building",
    testimonial: "Transformaram nosso sonho em realidade. Cada detalhe foi pensado para oferecer a melhor experiência aos moradores."
  },
  {
    category: "Infraestrutura",
    title: "Viaduto Conexão Norte",
    description: "Obra de grande porte que melhorou significativamente a mobilidade urbana, envolvendo cálculos complexos de vigas e gerenciamento de logística em área de tráfego intenso.",
    image: "https://placehold.co/600x400.png",
    hint: "highway overpass",
    testimonial: "Um projeto desafiador entregue com maestria. A capacidade da equipe de resolver problemas foi impressionante."
  },
  {
    category: "Industrial",
    title: "Centro de Distribuição LogMax",
    description: "Construção de um galpão industrial de 30.000m² com piso de alta resistência e soluções para docas de carregamento, otimizado para operações logísticas 24/7.",
    image: "https://placehold.co/600x400.png",
    hint: "large warehouse",
    testimonial: "Eficiência e robustez definem o trabalho da Engenharia Inovadora. O resultado superou nossas necessidades operacionais."
  },
  {
    category: "Restauração",
    title: "Patrimônio Histórico Theatro Central",
    description: "Restauração estrutural de um marco histórico, utilizando técnicas modernas para preservar a arquitetura original e garantir a segurança para as futuras gerações.",
    image: "https://placehold.co/600x400.png",
    hint: "historic theater",
    testimonial: "Um trabalho sensível e tecnicamente perfeito. Demonstraram profundo respeito pela história e um conhecimento técnico ímpar."
  },
    {
    category: "Saneamento",
    title: "Estação de Tratamento de Água Rio Limpo",
    description: "Projeto e construção de uma ETA com capacidade para abastecer 500 mil habitantes, utilizando tecnologia de ponta para garantir a qualidade da água.",
    image: "https://placehold.co/600x400.png",
    hint: "water treatment plant",
    testimonial: "Um projeto de impacto social gigantesco, conduzido com a máxima responsabilidade e competência técnica pela Engenharia Inovadora."
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-background">
       <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary font-semibold">Portfólio</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Nossos Projetos de Sucesso</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Explore uma seleção de projetos que demonstram nossa versatilidade, capacidade técnica e compromisso com resultados extraordinários.
            </p>
            <Button asChild size="lg" className="mt-8">
              {/* ATENÇÃO: Substitua "#" pelo link do seu PDF no Firebase Storage */}
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Baixar Portfólio Completo em PDF
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <Image src={project.image} alt={project.title} width={600} height={400} data-ai-hint={project.hint} className="w-full h-56 object-cover" />
                </div>
                <CardHeader>
                  <p className="text-sm text-primary font-medium">{project.category}</p>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="bg-secondary/30 p-6 mt-auto">
                    <blockquote className="text-sm italic text-foreground">
                        <p>"{project.testimonial}"</p>
                    </blockquote>
                </CardFooter>
              </Card>
            ))}
           </div>
        </div>
      </section>
    </div>
  )
}
