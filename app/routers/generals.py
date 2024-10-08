import os
import json
from typing import List, Iterable, Union
from fastapi import APIRouter, Depends
from ..dependencies import get_query_token
from ..models import General

router = APIRouter(
    prefix="/generals",
    tags=["generals"],
    dependencies=[Depends(get_query_token)],
    responses={404: {"description": "Not found"}},
)

generals: List[General] = []
for file in os.listdir('data'):
    if file.endswith('.json'):
        with open(os.path.join('data', file)) as f:
            generals.append(General.parse_raw(f.read()))

@router.get("/")
async def read_generals() -> List[General]:
    return generals

@router.get("/{general_id}")
async def read_general(general_id: str) -> Union[General, None]:
    for general in generals:
        if general.name == general_id:
            return general
    return None
