import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "João Silva",
    role: "Engenheiro Civil, CEO",
    avatar: "https://placehold.co/100x100.png",
    hint: "male portrait"
  },
  {
    name: "Maria Oliveira",
    role: "Arquiteta, Diretora de Projetos",
    avatar: "https://placehold.co/100x100.png",
    hint: "female portrait"
  },
  {
    name: "Carlos Pereira",
    role: "Engenheiro Elétrico, Sócio",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait"
  },
  {
    name: "Ana Costa",
    role: "Gerente de Obras",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait"
  },
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
              Fundada com o objetivo de revolucionar a engenharia civil, a Engenharia Inovadora combina técnica, criatividade e gestão para entregar projetos que superam expectativas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
         <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image src="https://placehold.co/1200x500.png" width={1200} height={500} alt="Escritório da Engenharia Inovadora" className="w-full h-full object-cover" data-ai-hint="modern office interior" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
