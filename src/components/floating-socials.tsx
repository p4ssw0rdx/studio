"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function FloatingSocials() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const buffer = 80; 
        setIsFooterVisible(footerRect.top < window.innerHeight + buffer);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-[9.5rem] right-8 z-40 flex flex-col items-center gap-3 transition-all duration-300 md:bottom-24",
        isFooterVisible || pathname === '/login' || pathname === '/admin' ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <Link 
        href="https://www.facebook.com/jvg.engenharia/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook da JVG Engenharia"
        className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
      >
        <Facebook className="h-5 w-5" />
      </Link>
      <Link 
        href="https://www.instagram.com/jvg.engenharia" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram da JVG Engenharia"
        className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
      >
        <Instagram className="h-5 w-5" />
      </Link>
    </div>
  );
}
