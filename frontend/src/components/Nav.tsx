const LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
];

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" className="text-lg font-bold tracking-tight">
        Prospecta<span className="text-accent">.</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-slate-300 transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contato"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent/90"
      >
        Falar com vendas
      </a>
    </nav>
  </header>
);

export default Nav;