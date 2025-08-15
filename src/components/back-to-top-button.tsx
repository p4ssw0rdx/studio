"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-all duration-300",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
