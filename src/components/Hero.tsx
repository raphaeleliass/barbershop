import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 gradient-overlay z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />

      <Container className="relative h-full flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7518740/pexels-photo-7518740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black after:opacity-40" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-1 bg-[#AB8B5A]" />
            <span className="text-[#D6B17D] uppercase tracking-widest text-sm">
              Bem-vindo à Barbearia
            </span>
          </div>
          <h1 className="text-7xl font-bold mb-6 text-white leading-tight">
            Estilo e Tradição em{" "}
            <span className="text-[#AB8B5A]">Cada Corte</span>
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl">
            Cortes modernos, atendimento personalizado e um ambiente
            descontraído para o homem contemporâneo
          </p>
          <div className="flex gap-6">
            <Button className="text-lg px-10">Agende agora</Button>
            <Button variant="secondary" className="text-lg">
              Conheça mais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
