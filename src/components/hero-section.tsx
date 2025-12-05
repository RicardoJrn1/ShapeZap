import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24">
      {/* Círculos ocos */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full border-[3px] border-primary/30" />
      <div className="pointer-events-none absolute -left-10 top-35 h-[500px] w-[500px] rounded-full border-[3px] border-primary/20" />
      <div className="pointer-events-none absolute right-0 top-52 h-[260px] w-[260px] rounded-full border-[3px] border-primary/10" />
      <div className="pointer-events-none absolute right-24 top-80 h-[120px] w-[120px] rounded-full border-[2px] border-primary/30" />
      <div className="pointer-events-none absolute right-100 top-90 h-[500px] w-[500px] rounded-full border-[2px] border-primary/30" />
      <div className="pointer-events-none absolute right-100 top-20 h-[400px] w-[400px] rounded-full border-[2px] border-primary/30" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-col gap-4">
            <h1 className="font-montserrat text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Tire uma foto. Descubra calorias. Simples assim.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 md:text-xl">
              O primeiro assistente nutricional direto no WhatsApp - rápido, prático e sem aplicativos complexos.
            </p>
          </div>
          <button
            className="
              mt-4 inline-flex items-center gap-2 rounded-full
              bg-primary px-10 py-3 text-base font-semibold text-primary-foreground
              shadow-[0_12px_30px_rgba(117,192,151,0.35)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(117,192,151,0.45)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
              focus-visible:ring-offset-2 focus-visible:ring-offset-background
            "
          >
            Começar Agora
            <span className="text-xl leading-none">→</span>
          </button>
        </div>


        {/* Imagem */}
        <div className="relative hidden w-full lg:flex justify-center">
          <div className="relative h-[420px] w-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/logo-hero.webp"
              alt="Pessoa tirando foto de comida com smartphone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
