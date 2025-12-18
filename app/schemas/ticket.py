from pydantic import BaseModel
from datetime import datetime

class TicketCreate(BaseModel):
    schedule_id: int
    seat_number: int

class TicketOut(TicketCreate):
    id: int
    user_id: int
    schedule_id: int
    seat_number: int
    booked_by: str
    created_at: datetime


    class Config:
        from_attributes = True
