import os
from functools import lru_cache
from supabase import Client, create_client

TABLE = "leads"


@lru_cache
def get_client() -> Client:
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

    if not url or not key:
        raise RuntimeError(
            "SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY sao obrigatorias"
        )

    return create_client(url, key)