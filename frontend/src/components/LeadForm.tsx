import { useState } from 'react';
import { supabase, isConfigured } from '../lib/supabase';

type Status = 'idle' | 'sending' | 'done' | 'error';

const FIELDS = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Maria Souza' },
  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'maria@empresa.com' },
  { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Empresa Ltda' },
] as const;

const LeadForm = () => {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!supabase) {
      setStatus('error');
      setMessage('Supabase não configurado. Confira o .env do frontend.');
      return;
    }

    setStatus('sending');
    const { error } = await supabase.from('leads').insert(form);

    if (error) {
      setStatus('error');
      setMessage(error.message);
      return;
    }

    setStatus('done');
    setForm({ nome: '', email: '', empresa: '' });
  };

  return (
    <section id="contato" className="border-t border-white/10 bg-ink-soft/40">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Quer ver funcionando?
        </h2>
        <p className="mt-3 text-slate-400">
          Deixe seu contato e a gente marca uma conversa de 20 minutos.
        </p>

        {!isConfigured && (
          <p className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            As variáveis do Supabase não estão definidas, então o envio vai falhar. Isso é
            esperado antes do Passo 3 do laboratório.
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5">
          {FIELDS.map((field) => (
            <label key={field.name} className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                {field.label}
              </span>
              <input
                required
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-accent focus:outline-none"
              />
            </label>
          ))}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:bg-accent/90 disabled:opacity-50"
          >
            {status === 'sending' ? 'Enviando...' : 'Quero a demonstração'}
          </button>
        </form>

        {status === 'done' && (
          <p className="mt-5 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
            Recebido. Confira a tabela leads no Supabase.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default LeadForm;