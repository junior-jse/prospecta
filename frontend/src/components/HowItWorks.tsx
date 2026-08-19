const STEPS = [
  {
    number: '1',
    title: 'Defina o perfil',
    text: 'Setor, porte, região e o problema que você resolve.',
  },
  {
    number: '2',
    title: 'Receba a fila',
    text: 'A base é cruzada com sinais públicos e devolve os leads ordenados por prioridade.',
  },
  {
    number: '3',
    title: 'Aborde e meça',
    text: 'Marque o que virou reunião. O score aprende com o seu histórico.',
  },
];

const HowItWorks = () => (
  <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona</h2>

    <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
      {STEPS.map((step) => (
        <li key={step.number}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 font-bold text-accent">
            {step.number}
          </span>
          <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default HowItWorks;