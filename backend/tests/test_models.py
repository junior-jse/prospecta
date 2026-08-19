import pytest
from pydantic import ValidationError

from src.models import LeadIn


def test_aceita_lead_valido():
    lead = LeadIn(nome="Maria Souza", email="maria@empresa.com", empresa="Empresa Ltda")

    assert lead.nome == "Maria Souza"
    assert lead.empresa == "Empresa Ltda"


def test_remove_espaco_das_pontas():
    lead = LeadIn(nome="  Maria  ", email="maria@empresa.com", empresa="  Empresa  ")

    assert lead.nome == "Maria"
    assert lead.empresa == "Empresa"


@pytest.mark.parametrize("email", ["maria", "maria@", "@empresa.com", "maria empresa.com"])
def test_recusa_email_invalido(email):
    with pytest.raises(ValidationError):
        LeadIn(nome="Maria Souza", email=email, empresa="Empresa Ltda")


@pytest.mark.parametrize("nome", ["", "M", "   "])
def test_recusa_nome_curto(nome):
    with pytest.raises(ValidationError):
        LeadIn(nome=nome, email="maria@empresa.com", empresa="Empresa Ltda")