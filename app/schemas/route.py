# app/schemas/route.py
from pydantic import BaseModel

class RouteBase(BaseModel):
    origin: str
    destination: str
    distance_km: int
    duration_minutes: int

class RouteCreate(RouteBase):
    pass

class RouteOut(RouteBase):
    id: int

    class Config:
        from_attributes = True  # pydantic v2 replacement for orm_mode
