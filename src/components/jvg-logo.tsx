import { cn } from "@/lib/utils";

export const JvgLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("text-foreground", className)}
      fill="currentColor"
    >
      <g>
        {/* Building 1 (back) */}
        <path d="M45 40 L45 80 L65 80 L65 30 Z"  fillOpacity="0.7"/>
        {/* Building 2 (middle) */}
        <path d="M30 50 L30 80 L50 80 L50 40 Z" fillOpacity="0.8"/>
        {/* Building 3 (front) */}
        <path d="M15 60 L15 80 L35 80 L35 50 Z" />
      </g>
    </svg>
  );
};
