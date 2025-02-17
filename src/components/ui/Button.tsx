interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-medium transition-all duration-300
        ${
          variant === "primary"
            ? "bg-[#AB8B5A] text-white hover:bg-[#8B714A] shadow-lg shadow-[#AB8B5A]/20"
            : "bg-white text-[#1B1B1F] border-2 border-[#AB8B5A] hover:bg-[#AB8B5A] hover:text-white"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
