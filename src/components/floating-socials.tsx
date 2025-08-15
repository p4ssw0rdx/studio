"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingSocials() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const isVisible = footerRect.top < window.innerHeight;
      setIsFooterVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 flex flex-col gap-3 transition-transform duration-300",
        isFooterVisible ? "translate-x-[-60px]" : "translate-x-0"
      )}
    >
      <Link 
        href="https://www.facebook.com/jvg.engenharia/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook da JVG Engenharia"
        className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </Link>
      <Link 
        href="https://www.instagram.com/jvg.engenharia" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram da JVG Engenharia"
        className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </Link>
    </div>
  );
}
