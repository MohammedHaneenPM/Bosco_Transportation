import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  lightMode?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  lightMode = false,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase font-semibold mb-3",
        "text-[#3b5fc2]",
        className
      )}
    >
      <span className="text-[#3b5fc2] font-bold">•</span>
      <span>{children}</span>
      <span className="text-[#3b5fc2] font-bold">•</span>
    </div>
  );
}
