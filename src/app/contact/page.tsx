"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
    });
    form.reset();
  }

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary font-semibold">Contato</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Vamos Conversar sobre seu Projeto</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Estamos prontos para ouvir suas ideias e transformá-las em realidade. Preencha o formulário ou entre em contato pelos nossos canais.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="font-headline text-2xl font-semibold mb-6">Envie sua Mensagem</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Sobre qual serviço gostaria de falar?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sua Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Descreva seu projeto ou dúvida aqui..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4 text-muted-foreground">
                   <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/10 rounded-full mt-1"><MapPin className="h-6 w-6 text-primary"/></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Nosso Escritório</h4>
                       <p>Av. Principal, 123 - Sala 45</p>
                       <p>Centro, São Paulo - SP, 01000-000</p>
                     </div>
                   </div>
                    <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/10 rounded-full mt-1"><Phone className="h-6 w-6 text-primary"/></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Telefone</h4>
                       <p>(11) 1234-5678</p>
                     </div>
                   </div>
                    <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/10 rounded-full mt-1"><Mail className="h-6 w-6 text-primary"/></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Email</h4>
                       <p>contato@jvgengenharia.com.br</p>
                     </div>
                   </div>
                </div>
              </div>
               <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Localização</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                   <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Mapa da localização do escritório" className="w-full h-full object-cover" data-ai-hint="city map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
