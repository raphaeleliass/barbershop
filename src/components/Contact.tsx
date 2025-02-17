import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <Button className="w-full">Enviar mensagem</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Localização
              </h3>
              <p className="text-gray-600">
                Rua da Barbearia, 123
                <br />
                Centro, Sua Cidade - UF
                <br />
                CEP: 12345-678
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Contato
              </h3>
              <p className="text-gray-600">
                Telefone: (11) 99999-9999
                <br />
                Email: contato@barbearia.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Horário de Funcionamento
              </h3>
              <p className="text-gray-600">
                Segunda a Sábado: 9h às 20h
                <br />
                Domingo: Fechado
              </p>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                className="w-full aspect-video rounded-2xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36285.306629609215!2d-43.36025983523473!3d-21.76302902544697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1739822038322!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
