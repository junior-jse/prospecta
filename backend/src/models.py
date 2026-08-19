from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, field_validator


class LeadIn(BaseModel):
    nome: str = Field(min_length=2, max_length=120)
    email: EmailStr
    empresa: str = Field(min_length=2, max_length=120)

    @field_validator("nome", "empresa")
    @classmethod
    def sem_espaco_sobrando(cls, value: str) -> str:
        limpo = value.strip()
        if len(limpo) < 2:
            raise ValueError("precisa de pelo menos 2 caracteres")
        return limpo


class LeadOut(LeadIn):
    id: str
    created_at: datetime