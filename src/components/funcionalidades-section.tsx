import { ClipboardList, Camera, BarChart3 } from "lucide-react";

const categorias = [
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: "Cadastro Inteligente",
    items: [
      "",
      "Peso, altura e idade",
      "Objetivo de peso",
      "Prazo para atingir a meta",
      "Consumo calórico diário",
      "Número e horários de refeições",
    ],
  },
  {
    icon: <Camera className="h-6 w-6 text-primary" />,
    title: "Registro por Foto",
    items: [
      "",
      "Análise automática da refeição",
      "Estimativa de peso",
      "Quantidade",
      "Calorias",
      "Armazenamento no histórico",
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Gestão e Relatórios",
    items: ["","Comparativos", "Evolução", "Ajustes de meta"],
  },
];

export default function FuncionalidadesSection() {
  return (
    <section
      id="funcionalidades"
      className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20"
    >
      {/* Círculos decorativos de fundo – mantém igual */}
      <div className="pointer-events-none absolute -right-40 -top-10 h-[500px] w-[500px] rounded-full border-[2px] border-primary/10" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full border-[3px] border-primary/20" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14">
        {/* COLUNA ESQUERDA — CARDS COMPACTOS */}
        <div className="flex flex-col gap-4">
          {categorias.map((cat) => (
            <div
              key={cat.title}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white/85 backdrop-blur-md border border-primary/10
                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
              "
            >
              <div className="p-5">
                {/* Linha principal (sem muita altura) */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat text-base font-semibold text-foreground">
                      {cat.title}
                    </h3>
                    {/* Primeiro item sempre visível */}
                    <p className="mt-1 text-sm text-foreground/70">
                      {cat.items[0]}
                    </p>
                  </div>
                </div>

                {/* Detalhes extras – ficam “guardados” até o hover */}
                <div
                  className="
                    overflow-hidden max-h-0 group-hover:max-h-40
                    transition-all duration-400
                  "
                >
                  <ul className="mt-3 flex flex-col gap-1.5 text-sm text-foreground/75">
                    {cat.items.slice(1).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Linha discreta embaixo no hover */}
              <span
                className="
                  pointer-events-none absolute inset-x-5 bottom-0 h-[2px]
                  origin-left scale-x-0 rounded-full bg-primary/60
                  transition-transform duration-300 group-hover:scale-x-100
                "
              />
            </div>
          ))}
        </div>

        {/* COLUNA DIREITA — TEXTO (para não ficar “vazia”) */}
        <div className="flex flex-col justify-center text-center lg:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
            Funcionalidades
          </p>

          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            Tudo que você precisa, sem complicação
          </h2>

          <p className="mt-4 text-base text-foreground/70 md:text-lg">
            O ShapeZap organiza tudo em três pilares: um cadastro inteligente,
            registro rápido por foto e relatórios claros para acompanhar sua
            evolução com tranquilidade.
          </p>

          <p className="mt-3 text-sm text-foreground/60">
            Passe o mouse sobre cada funcionalidade para ver os detalhes.
          </p>
        </div>
      </div>
    </section>
  );
}
