import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

const testimonials = [
  {
    name: "João Silva",
    text: "Melhor barbearia da região! Atendimento impecável e cortes sempre no estilo que eu quero.",
    role: "Cliente desde 2020",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Pedro Santos",
    text: "Profissionais muito capacitados e ambiente super agradável. Recomendo a todos!",
    role: "Cliente desde 2021",
    image:
      "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Carlos Oliveira",
    text: "Encontrei meu estilo aqui. A equipe sempre traz ótimas sugestões e o resultado é incrível.",
    role: "Cliente desde 2019",
    image:
      "https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>O que nossos clientes dizem</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-roboto">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
