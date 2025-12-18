from pydantic import BaseModel
from typing import List

class SeatAvailability(BaseModel):
    schedule_id: int
    total_seats: int
    booked_seats: List[int]
    available_seats: List[int]
