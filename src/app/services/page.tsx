import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, DraftingCompass, FileCheck2, Flame, Hammer, Home as HomeIcon, Landmark, Map, Ruler, Wrench } from "lucide-react";

const services = [
  {
    icon: DraftingCompass,
    title: "Projetos Arquitetônicos",
    description: "Criamos projetos arquitetônicos personalizados que unem estética e funcionalidade, transformando suas ideias em espaços únicos e bem planejados, otimizados para o seu bem-estar.",
    details: [
      "Elaboração de plantas baixas, cortes e fachadas.",
      "Criação de modelos 3D e renderizações realistas.",
      "Compatibilização com projetos estruturais e complementares.",
      "Consultoria para escolha de materiais e acabamentos."
    ]
  },
  {
    icon: Building2,
    title: "Projetos Estruturais",
    description: "Desenvolvemos projetos de estruturas em concreto armado, metálicas e de madeira. Nossas soluções são otimizadas para segurança, economia e exequibilidade, utilizando softwares de última geração.",
    details: [
      "Cálculo e dimensionamento de vigas, pilares e lajes.",
      "Análise de estabilidade global da estrutura.",
      "Projetos de fundações superficiais e profundas.",
      "Compatibilização com projetos de arquitetura e instalações."
    ]
  },
  {
    icon: Ruler,
    title: "Projetos de Marcenaria",
    description: "Elaboramos projetos de marcenaria sob medida que otimizam espaços e agregam valor estético aos ambientes. Criamos soluções inteligentes e personalizadas para móveis e acabamentos.",
    details: [
      "Design de móveis planejados para cozinhas, quartos e salas.",
      "Detalhamento técnico para execução em marcenaria.",
      "Seleção de materiais, ferragens e acabamentos.",
      "Projetos de painéis, portas especiais e elementos decorativos."
    ]
  },
  {
    icon: HomeIcon,
    title: "Interiores",
    description: "Transformamos ambientes com projetos de interiores que refletem sua personalidade e estilo de vida. Cuidamos de cada detalhe, desde o layout até a iluminação e decoração, para criar espaços acolhedores.",
    details: [
      "Planejamento de layout e distribuição do mobiliário.",
      "Projetos de iluminação, gesso e forro.",
      "Especificação de revestimentos, cores e texturas.",
      "Consultoria para decoração e escolha de objetos."
    ]
  },
  {
    icon: FileCheck2,
    title: "Regularizações",
    description: "Cuidamos de todo o processo de regularização de imóveis junto aos órgãos competentes. Garantimos que sua construção esteja de acordo com a legislação, evitando multas e problemas futuros.",
    details: [
      "Aprovação de projetos na prefeitura.",
      "Obtenção de alvarás de construção e Habite-se.",
      "Regularização de obras já executadas (residenciais e comerciais).",
      "Unificação e desmembramento de lotes."
    ]
  },
  {
    icon: Hammer,
    title: "Reforma",
    description: "Planejamos e gerenciamos reformas completas ou parciais, com foco na qualidade, prazo e orçamento. Modernizamos seu imóvel, otimizando espaços e valorizando seu patrimônio.",
    details: [
      "Planejamento e cronograma da obra.",
      "Gerenciamento de equipes e fornecedores.",
      "Reformas de fachadas, áreas internas e externas.",
      "Acompanhamento técnico para garantir a qualidade dos serviços."
    ]
  },
  {
    icon: Flame,
    title: "Prevenção e Combate a Incêndio",
    description: "Desenvolvemos projetos de prevenção e combate a incêndio (PPCI) para garantir a segurança de edificações comerciais e residenciais, seguindo rigorosamente as normas técnicas e legislações.",
    details: [
      "Elaboração de projetos de hidrantes e sprinklers.",
      "Dimensionamento de saídas de emergência e sinalização.",
      "Laudos técnicos para obtenção ou renovação do AVCB.",
      "Consultoria completa para adequação às normas de segurança."
    ]
  },
   {
    icon: Landmark,
    title: "Topografia",
    description: "Realizamos levantamentos topográficos precisos para projetos de engenharia e arquitetura. Nossos serviços são essenciais para o planejamento, execução e regularização de qualquer empreendimento.",
    details: [
      "Levantamento planialtimétrico cadastral.",
      "Georreferenciamento de imóveis rurais e urbanos.",
      "Locação e acompanhamento de obras.",
      "Demarcação de lotes e divisas."
    ]
  },
  {
    icon: Wrench,
    title: "Serviços de Engenharia em Geral",
    description: "Oferecemos uma gama completa de serviços de engenharia para atender às suas necessidades, desde laudos técnicos e perícias até o gerenciamento completo de obras, com foco na eficiência e qualidade.",
    details: [
      "Laudos de patologias construtivas (infiltrações, fissuras).",
      "Inspeções prediais e vistorias técnicas.",
      "Gerenciamento e acompanhamento de obras.",
      "Consultoria técnica especializada para diversas finalidades."
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-background">
       <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary font-semibold">Soluções</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Nossos Serviços</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Oferecemos um portfólio completo de serviços para atender a todas as fases do seu projeto, da concepção à conclusão, com excelência e inovação.
            </p>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-4">
                        <Icon className="h-8 w-8 text-primary shrink-0" />
                        <div>
                          <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pl-16">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <div className="w-1 h-1 bg-primary rounded-full mt-2.5 shrink-0"></div>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
             </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
