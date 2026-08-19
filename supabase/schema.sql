create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  empresa text not null,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon pode inserir lead"
  on public.leads
  for insert
  to anon
  with check (true);