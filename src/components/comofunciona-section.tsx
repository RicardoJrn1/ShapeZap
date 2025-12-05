import { Camera, Bot, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: '1. Envie a Foto',
    description:
      'Basta abrir o WhatsApp, tirar a foto e enviar.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: '2. A IA faz todo o trabalho',
    description:
      'Identifica peso, quantidade e calcula calorias automaticamente.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: '3. Você acompanha tudo no seu histórico',
    description:
      'Registro organizado para acompanhar evolução e metas.',
  },
];

export default function ComoFuncionaSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* CÍRCULOS DE FUNDO – NÃO MEXER :) */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full border-[3px] border-primary/20" />
      <div className="pointer-events-none absolute -right-10 top-40 h-[600px] w-[600px] rounded-full border-[2px] border-primary/10" />
      <div className="pointer-events-none absolute -left-52 bottom-0 h-[500px] w-[500px] rounded-full border-[3px] border-primary/10" />
      <div className="pointer-events-none absolute right-100 -top-70 h-[500px] w-[500px] rounded-full border-[2px] border-primary/30" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:px-8">
        {/* Coluna da Esquerda: Cards com os passos */}
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            return (
              <div
                key={step.title}
                className="group relative flex items-start gap-6 rounded-2xl bg-background/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary ring-8 ring-primary/5">
                  {stepNumber}
                </div>
                <div>
                  <h3 className="font-montserrat text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-base text-foreground/70">
                    {step.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Coluna da Direita: Cabeçalho da seção */}
        <div className="text-center lg:text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Como funciona
          </p>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Como o ShapeZap <br /> transforma sua rotina
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Em apenas três passos simples, você terá o controle total da sua
            nutrição, direto do seu WhatsApp — sem aplicativos complexos.
          </p>
        </div>
      </div>
    </section>
  );
}
