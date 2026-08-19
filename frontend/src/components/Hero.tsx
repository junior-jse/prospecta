const STATS = [
  { value: '3x', label: 'mais reuniões agendadas' },
  { value: '−60%', label: 'tempo de pesquisa manual' },
  { value: '12k', label: 'empresas na base' },
];

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
    <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      Prospecção B2B com dados
    </p>

    <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
      Pare de garimpar leads
      <br />
      em planilha.
    </h1>

    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
      O Prospecta encontra as empresas que combinam com o seu produto, qualifica cada
      uma por sinais públicos e te entrega uma fila pronta pra abordar.
    </p>

    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contato"
        className="rounded-lg bg-accent px-6 py-3 text-center font-semibold text-ink transition hover:bg-accent/90"
      >
        Quero uma demonstração
      </a>
      <a
        href="#como-funciona"
        className="rounded-lg border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:bg-white/5"
      >
        Ver como funciona
      </a>
    </div>

    <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <dt className="text-3xl font-bold text-accent">{stat.value}</dt>
          <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;