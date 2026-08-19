from fastapi.testclient import TestClient

from src import main
from src.main import app

client = TestClient(app)


class FakeQuery:
    def __init__(self, data):
        self._data = data

    def insert(self, payload):
        self._data = [{"id": "fake-uuid", "created_at": "2026-01-01T00:00:00Z", **payload}]
        return self

    def select(self, *_args):
        return self

    def order(self, *_args, **_kwargs):
        return self

    def limit(self, *_args):
        return self

    def execute(self):
        return type("Resposta", (), {"data": self._data})()


class FakeClient:
    def __init__(self, data=None):
        self._data = data or []

    def table(self, _name):
        return FakeQuery(self._data)


def test_health_responde_ok():
    resposta = client.get("/health")

    assert resposta.status_code == 200
    assert resposta.json() == {"status": "ok"}


def test_criar_lead_devolve_registro(monkeypatch):
    monkeypatch.setattr(main, "get_client", lambda: FakeClient())

    resposta = client.post(
        "/leads",
        json={"nome": "Maria Souza", "email": "maria@empresa.com", "empresa": "Empresa Ltda"},
    )

    assert resposta.status_code == 201
    assert resposta.json()["email"] == "maria@empresa.com"


def test_criar_lead_recusa_payload_invalido(monkeypatch):
    monkeypatch.setattr(main, "get_client", lambda: FakeClient())

    resposta = client.post(
        "/leads",
        json={"nome": "M", "email": "nao-e-email", "empresa": "X"},
    )

    assert resposta.status_code == 422


def test_leads_sem_credencial_responde_503(monkeypatch):
    def sem_credencial():
        raise RuntimeError("SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY sao obrigatorias")

    monkeypatch.setattr(main, "get_client", sem_credencial)

    resposta = client.get("/leads")

    assert resposta.status_code == 503