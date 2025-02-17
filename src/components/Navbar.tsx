import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Navbar() {
  const navItems = [
    { label: "Início", href: "#" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#1B1B1F]/95 backdrop-blur-md z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <span className="text-[#AB8B5A]">✂️</span>
            <span>Barbearia</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#AB8B5A] transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button>Agende seu horário</Button>
        </div>
      </Container>
    </nav>
  );
}
