import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

const images = [
  {
    url: "https://i.pinimg.com/736x/e0/4e/70/e04e70aaef52f4600e4bbb06f084a357.jpg",
    alt: "Corte moderno",
  },
  {
    url: "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Barba bem feita",
  },
  {
    url: "https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Ambiente da barbearia",
  },
  {
    url: "https://i.pinimg.com/736x/cd/ed/5a/cded5a0f6ea3a8f728bbf1b504509578.jpg",
    alt: "Cliente satisfeito",
  },
  {
    url: "https://i.pinimg.com/736x/6d/3c/e2/6d3ce2bddd1a2b03c15b77155bf6a684.jpg",
    alt: "Corte tradicional",
  },
  {
    url: "https://i.pinimg.com/736x/88/85/2a/88852aa46476dff5b0860a270184363e.jpg",
    alt: "Detalhes do corte",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <Container>
        <SectionTitle>Galeria</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos cortes e transformações que fazem nossos
          clientes se sentirem especiais
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg group"
            >
              <img
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                src={image.url}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
