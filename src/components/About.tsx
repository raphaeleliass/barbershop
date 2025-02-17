import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle>Sobre Nós</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Há mais de 10 anos cuidando do estilo dos homens da cidade, nossa
              barbearia combina tradição e modernidade para oferecer o melhor
              atendimento.
            </p>
            <p className="text-gray-600 text-lg">
              Nossa equipe é formada por profissionais experientes e apaixonados
              pelo que fazem, sempre atualizados com as últimas tendências do
              mercado.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              className="w-full h-full object-cover object-center rounded-2xl"
              src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="nossa barbearia"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
