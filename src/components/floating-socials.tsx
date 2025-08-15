"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function FloatingSocials() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Hide the icons if the top of the footer is near or above the bottom of the viewport
        const buffer = 80; // an 80px buffer zone
        setIsVisible(footerRect.top > window.innerHeight - buffer);
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
        "fixed bottom-[9.5rem] right-8 z-40 flex flex-col items-center gap-3 transition-all duration-500 md:bottom-24",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
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
