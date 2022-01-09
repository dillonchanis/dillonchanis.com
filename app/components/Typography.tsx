import React from "react";

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export function Title({ children }: TypographyProps) {
  return (
    <h1 className="text-4xl leading-8 tracking-tight text-slate-900 dark:text-white">
      {children}
    </h1>
  );
}

export function Paragraph({ className, children }: TypographyProps) {
  return <p className={`text-xl text-slate-700 dark:text-slate-300 ${className}`}>{children}</p>;
}
