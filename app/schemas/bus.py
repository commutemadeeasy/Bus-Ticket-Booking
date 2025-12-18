from pydantic import BaseModel

class BusCreate(BaseModel):
    plate_number: str
    capacity: int
    model: str | None = None
