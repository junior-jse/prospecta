from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .db import TABLE, get_client
from .models import LeadIn

app = FastAPI(title="Prospecta API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/leads")
def listar_leads() -> list[dict]:
    try:
        client = get_client()
    except RuntimeError as erro:
        raise HTTPException(status_code=503, detail=str(erro))

    resposta = (
        client.table(TABLE)
        .select("*")
        .order("created_at", desc=True)
        .limit(100)
        .execute()
    )
    return resposta.data


@app.post("/leads", status_code=201)
def criar_lead(lead: LeadIn) -> dict:
    try:
        client = get_client()
    except RuntimeError as erro:
        raise HTTPException(status_code=503, detail=str(erro))

    resposta = client.table(TABLE).insert(lead.model_dump()).execute()

    if not resposta.data:
        raise HTTPException(status_code=502, detail="Supabase nao retornou o registro")

    return resposta.data[0]