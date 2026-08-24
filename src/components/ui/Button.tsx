import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer select-none group font-medium";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-xs px-6 py-3.5 gap-2.5",
    lg: "text-sm px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#FF5722] hover:bg-[#E64A19] text-white shadow-sm hover:shadow-[0_0_20px_rgba(255,87,34,0.35)] border border-[#FF5722]",
    secondary:
      "bg-[#14171A] hover:bg-[#1B1F23] text-white border border-white/15 hover:border-white/30",
    outline:
      "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/50",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#85898C] hover:text-white border border-transparent",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
