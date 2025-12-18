# app/schemas/schedule.py
from pydantic import BaseModel
from datetime import datetime

class ScheduleCreate(BaseModel):
    bus_id: int
    route_id: int
    departure_time: datetime

class ScheduleOut(ScheduleCreate):
    id: int
    arrival_time: datetime

    class Config:
        from_attributes = True
