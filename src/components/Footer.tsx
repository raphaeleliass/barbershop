import { Container } from "./ui/Container";

const socialLinks = [
  { name: "Instagram", href: "#", icon: "📸" },
  { name: "Facebook", href: "#", icon: "👥" },
  { name: "WhatsApp", href: "#", icon: "📱" },
];

const quickLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Galeria", href: "#gallery" },
  { name: "Contato", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Barbearia</h3>
            <p className="text-gray-400">
              Estilo e tradição em cada corte, cuidando do visual dos nossos
              clientes com excelência e profissionalismo.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl hover:text-amber-500 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Barbearia. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
