interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-12 h-[2px] bg-[#AB8B5A]" />
        <span className="text-[#AB8B5A] uppercase tracking-widest text-sm font-medium">
          Nossa Qualidade
        </span>
        <div className="w-12 h-[2px] bg-[#AB8B5A]" />
      </div>
      <h2 className={`text-4xl font-bold text-[#1B1B1F] ${className}`}>
        {children}
      </h2>
    </div>
  );
}
