import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DraftingCompass, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Projetos Estruturais",
      description: "Desenvolvemos projetos estruturais seguros e eficientes, otimizados para cada tipo de construção.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Gerenciamento de Obras",
      description: "Coordenamos todas as etapas da sua obra, garantindo prazos, custos e a mais alta qualidade.",
    },
    {
      icon: <DraftingCompass className="h-10 w-10 text-primary" />,
      title: "Consultoria Técnica",
      description: "Oferecemos laudos, vistorias e consultoria especializada para garantir a conformidade e segurança do seu projeto.",
    },
  ];

  const projects = [
    {
      title: "Edifício Corporativo Connect",
      description: "Um marco na arquitetura moderna da cidade, com soluções estruturais inovadoras.",
      image: "https://placehold.co/600x400.png",
      hint: "modern building"
    },
    {
      title: "Residencial Vista Verde",
      description: "Complexo residencial que integra natureza e engenharia para uma qualidade de vida superior.",
      image: "https://placehold.co/600x400.png",
      hint: "residential complex"
    },
    {
      title: "Ponte Transoceânica",
      description: "Projeto de infraestrutura complexo que conecta regiões e impulsiona o desenvolvimento.",
      image: "https://placehold.co/600x400.png",
      hint: "modern bridge"
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://placehold.co/1920x1080.png)'}} data-ai-hint="engineering blueprint">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            Construindo o Futuro, Projeto por Projeto.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Excelência e inovação em cada empreendimento.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/projects">Explore Nossos Projetos</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Nossos Serviços</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas e inovadoras para os desafios da engenharia moderna.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Projetos em Destaque</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que demonstram nosso compromisso com a qualidade e inovação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
               <Card key={index} className="overflow-hidden group">
                 <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.hint}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                 </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
             <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Engenharia Inovadora</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Com uma década de experiência e um portfólio de sucesso, somos referência em soluções de engenharia. Nossa missão é transformar desafios em realidade, com foco na sustentabilidade, segurança e na satisfação total de nossos clientes.
                </p>
                 <Button asChild size="lg" className="mt-6">
                  <Link href="/about">Conheça nossa história</Link>
                </Button>
             </div>
             <div className="rounded-lg overflow-hidden shadow-xl">
                 <Image src="https://placehold.co/600x450.png" alt="Nossa equipe em reunião" width={600} height={450} data-ai-hint="engineering team" className="w-full h-auto object-cover" />
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
