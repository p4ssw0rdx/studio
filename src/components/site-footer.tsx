import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { JvgLogo } from "./jvg-logo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/70 text-secondary-foreground">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <JvgLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">JVG Engenharia</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Construindo o futuro com precisão, inovação e excelência em engenharia.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projetos</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(35) 99230-7111 (Vinicius)</span>
              </li>
               <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(35) 99874-3488 (Gabriel)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@jvgengenharia.com.br</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/jvg.engenharia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="https://www.instagram.com/jvg.engenharia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} JVG Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
