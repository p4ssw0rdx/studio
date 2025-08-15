"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function FloatingSocials() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Show the icons if the top of the footer is not yet in the viewport
        setIsVisible(window.innerHeight - footerRect.top < 70);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Re-run when page changes

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-40 flex flex-col items-center gap-3 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
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
