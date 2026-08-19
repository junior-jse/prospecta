# Prospecta

Landing page de prospecção B2B com backend em Python.

O laboratório está em [`prospecta-lab-cicd`](https://docs.google.com/document/d/1TNqo1-A0hKV0bdZaoYYx5gDnPyD90MPNE5Ewi_m8Agc/edit?usp=sharing).
O repo vem sem workflows de propósito - criar o `ci.yml` e o `deploy-production.yml` é o
exercício.

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 18, Vite, TypeScript, Tailwind 4 |
| Backend | FastAPI, Pydantic, pytest |
| Banco | Supabase (Postgres) |
| Container | Docker, nginx |

## Estrutura

```
frontend/   landing page; grava o lead direto no Supabase com a anon key
backend/    API de leitura dos leads, usa a service role key
supabase/   schema.sql com a tabela e a policy de RLS
```

## Rodando local

Frontend:

```bash
cd frontend
cp .env.example .env
npm ci
npm run dev
```

Backend:

```bash
cd backend
cp .env.example .env
pip install -r requirements.txt
pytest -q
uvicorn src.main:app --reload
```

Ou os dois em container:

```bash
docker compose up --build
```