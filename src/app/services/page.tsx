import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, DraftingCompass, Handshake, Search, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Projetos Estruturais",
    description: "Desenvolvemos projetos de estruturas em concreto armado, protendido, estruturas metálicas e de madeira. Nossas soluções são otimizadas para segurança, economia e exequibilidade, utilizando softwares de última geração para modelagem e análise (BIM).",
    details: [
      "Cálculo e dimensionamento de vigas, pilares e lajes.",
      "Análise de estabilidade global.",
      "Projetos de fundações superficiais e profundas.",
      "Compatibilização com projetos de arquitetura e instalações."
    ]
  },
  {
    icon: Wrench,
    title: "Gerenciamento e Execução de Obras",
    description: "Assumimos a responsabilidade total pela sua obra, desde o planejamento até a entrega das chaves. Coordenamos equipes, fornecedores e cronogramas para garantir que o projeto seja concluído no prazo, dentro do orçamento e com a máxima qualidade.",
    details: [
      "Elaboração de cronograma físico-financeiro.",
      "Contratação e gestão de mão de obra e fornecedores.",
      "Controle de qualidade de materiais e serviços.",
      "Relatórios periódicos de avanço da obra."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Laudos e Perícias Técnicas",
    description: "Realizamos vistorias e elaboramos laudos técnicos detalhados para as mais diversas finalidades, como patologias construtivas, avaliação de imóveis, inspeções prediais e perícias judiciais, sempre com imparcialidade e rigor técnico.",
    details: [
      "Laudos de patologias (infiltrações, fissuras, etc.).",
      "Inspeção predial para condomínios (NBR 16747).",
      "Laudos de avaliação de imóveis.",
      "Assistência técnica em processos judiciais."
    ]
  },
  {
    icon: Search,
    title: "Estudos de Viabilidade",
    description: "Analisamos a viabilidade técnica e econômica do seu empreendimento antes do investimento inicial. Nossos estudos ajudam a mitigar riscos e a tomar decisões mais assertivas, baseadas em dados concretos sobre custos, legislação e potencial de mercado.",
    details: [
      "Análise da legislação urbanística e ambiental.",
      "Estimativa de custos de construção.",
      "Estudo preliminar de arquitetura e engenharia.",
      "Análise de retorno sobre o investimento (ROI)."
    ]
  },
  {
    icon: Handshake,
    title: "Consultoria em Engenharia",
    description: "Oferecemos nosso conhecimento especializado para auxiliar clientes e outras empresas em desafios específicos. Nossa consultoria abrange desde a escolha de materiais e tecnologias até a otimização de processos construtivos e gestão de projetos.",
    details: [
      "Seleção de tecnologias e materiais construtivos.",
      "Otimização de projetos para redução de custos.",
      "Implementação de metodologia BIM.",
      "Consultoria em sustentabilidade e certificações (LEED, AQUA)."
    ]
  },
  {
    icon: DraftingCompass,
    title: "Projetos Complementares",
    description: "Além da estrutura, desenvolvemos e compatibilizamos os projetos complementares essenciais para qualquer edificação, garantindo a integração e o funcionamento perfeito de todos os sistemas.",
     details: [
      "Projetos de instalações elétricas e hidrossanitárias.",
      "Projetos de prevenção e combate a incêndio (PPCI).",
      "Projetos de climatização e ventilação.",
      "Projetos de telecomunicações e automação predial."
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
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Serviços de Engenharia de Ponta</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Oferecemos um portfólio completo de serviços para atender a todas as fases do seu projeto, da concepção à conclusão.
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
