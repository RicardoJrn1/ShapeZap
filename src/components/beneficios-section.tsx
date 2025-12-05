import { Check } from 'lucide-react';

const beneficios = [
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
      'Sem instalar apps - funciona 100% dentro do WhatsApp.',
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
      'Rápido e prático - poucos segundos para desconbrir calorias.',
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
      'Ideal para dietas, diabetes e reeducação alimentar.',
  },
    {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
      'Histórico inteligente - veja o consumo diário/semanal/mensal.',
  },
    {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
      'Lembretes de refeições.',
  },
    {
    icon: <Check className="h-10 w-10 text-primary" />,
    description:
        'Acompanhamento de objetivos - peso/meta/dias.',
    },
];

export default function BeneficiosSection() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute -left-40 top-60 h-[500px] w-[500px] -translate-y-1/2 rounded-full border-[2px] border-primary/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full border-[3px] border-primary/20" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full border-[3px] border-primary/30" />
      <div className="pointer-events-none absolute -left-10 top-10 h-[500px] w-[500px] rounded-full border-[3px] border-primary/20" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:px-8">
        {/* Coluna da Esquerda: Cabeçalho da seção */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Benefícios
          </p>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Por que usar o ShapeZap?
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Descubra como o ShapeZap foi pensado para se integrar perfeitamente
            à sua vida, tornando o caminho para seus objetivos mais fácil e
            intuitivo.
          </p>
        </div>

        {/* Coluna da Direita: Cards com os benefícios */}
        <div className="flex flex-col gap-8">
          {beneficios.map((beneficio) => (
            <div key={beneficio.description} className="flex items-start gap-6">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                {beneficio.icon}
              </div>
              <p className="text-lg text-foreground/80">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}