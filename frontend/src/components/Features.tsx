const FEATURES = [
  {
    title: 'Busca por perfil ideal',
    text: 'Descreva o cliente que você quer e receba a lista de empresas que batem com o perfil, por setor, porte e região.',
  },
  {
    title: 'Score de prioridade',
    text: 'Cada lead entra com uma nota baseada em sinais públicos: vagas abertas, tecnologia usada e movimentação recente.',
  },
  {
    title: 'Fila pronta pra abordar',
    text: 'Exporte ou integre com o seu CRM. Sem copiar e colar, sem duplicata, sem lead frio no meio.',
  },
];

const Features = () => (
  <section id="recursos" className="border-t border-white/10 bg-ink-soft/40">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Três coisas, bem feitas
      </h2>
      <p className="mt-3 max-w-xl text-slate-400">
        Nada de painel com quarenta gráficos que ninguém abre.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-xl border border-white/10 bg-ink p-6 transition hover:border-accent/40"
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Features;