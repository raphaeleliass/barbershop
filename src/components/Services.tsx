import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

const services = [
  {
    title: "Corte de Cabelo",
    description: "Cortes modernos e personalizados para todos os estilos",
    icon: "✂️",
  },
  {
    title: "Barba",
    description:
      "Aparo, desenho e cuidados com a barba para um visual impecável",
    icon: "🪒",
  },
  {
    title: "Pacote Completo",
    description: "Corte + barba + cuidados com a pele para um visual renovado",
    icon: "👨",
  },
  {
    title: "Tratamentos Capilares",
    description:
      "Hidratação, revitalização e outros tratamentos para cabelos saudáveis",
    icon: "💆‍♂️",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#1B1B1F]">
      <Container>
        <SectionTitle className="text-white">Nossos Serviços</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#2A2A2E] p-8 rounded-lg hover:translate-y-[-8px] transition-all duration-300 border border-[#AB8B5A]/20 group"
            >
              <div className="bg-[#AB8B5A]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#AB8B5A] transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-roboto">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
