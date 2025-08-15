import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Vinicius Duarte",
    role: "Engenheiro Civil e Ambiental",
    avatar: "/images/0.jpeg",
    bio: "Tenho 37 anos e sou engenheiro civil e ambiental, com pós-graduação em Estruturas de Concreto Armado e Segurança do Trabalho. Minha trajetória na engenharia começou em 2008, quando iniciei meus trabalhos com um escritório em Pratápolis. Desde então, tenho me aprofundado cada vez mais na área de estruturas de concreto, unindo teoria e prática para entregar soluções eficientes, seguras e econômicas para o cliente. Atualmente, desenvolvo projetos arquitetônicos, projetos estruturais e projetos complementares , incluindo detalhamentos como planta de formas, vigas, pilares e lajes, além de oferecer consultorias especializadas em engenharia estrutural. 🏗️🏢",
    hint: "male portrait"
  },
  {
    name: "Gabriel Vilela",
    role: "Engenheiro Civil e Pós-graduado em Arquitetura",
    avatar: "/images/1.jpeg",
    bio: "Tenho 27 anos, sou engenheiro civil e pós-graduado em Arquitetura e Urbanismo, e minha paixão por projetos surgiu durante meus estágios na área. Desde então, venho me especializando em Arquitetura e Interiores, sempre buscando aprimoramento por meio de cursos e experiências práticas no dia a dia. Atualmente, desenvolvo projetos arquitetônicos, projetos de interiores, detalhamento e projeto técnico, Renderizações de imagens e consultorias para transformar ideias em realidade! 🏡 📿",
    hint: "male portrait"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary font-semibold">Quem Somos</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Nossa Paixão é Construir</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Fundada com o objetivo de revolucionar a engenharia civil, a JVG Engenharia combina técnica, criatividade e gestão para entregar projetos que superam expectativas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
         <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image src="https://placehold.co/1200x500.png" width={1200} height={500} alt="Escritório da JVG Engenharia" className="w-full h-full object-cover" data-ai-hint="modern office interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Uma Década de Excelência</h2>
                    <p className="mt-2 max-w-2xl">Desde 2014, transformamos ideias em marcos de concreto e aço.</p>
                </div>
            </div>
         </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-semibold">Nossa Missão</h3>
              <p className="mt-2 text-muted-foreground">
                Entregar soluções de engenharia de alta performance, com foco na segurança, sustentabilidade e inovação, garantindo a satisfação total de nossos clientes.
              </p>
            </Card>
            <Card className="p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-semibold">Nossa Visão</h3>
              <p className="mt-2 text-muted-foreground">
                Ser a empresa de engenharia líder e mais admirada do mercado, reconhecida pela excelência técnica, ética e por contribuir para o desenvolvimento da sociedade.
              </p>
            </Card>
             <Card className="p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-semibold">Nossos Valores</h3>
              <p className="mt-2 text-muted-foreground">
                Compromisso com a qualidade, integridade, trabalho em equipe, inovação contínua e respeito ao meio ambiente e às pessoas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes e apaixonados, prontos para transformar seus desafios em sucesso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="p-6 shrink-0">
                  <Avatar className="h-32 w-32 mx-auto">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} className="object-cover" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="p-6">
                  <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium mt-1">{member.role}</p>
                  <CardContent className="p-0 mt-4">
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
