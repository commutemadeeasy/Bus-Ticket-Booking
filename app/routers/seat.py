from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.schedule import Schedule
from app.models.bus import Bus
from app.models.ticket import Ticket
from app.schemas.seat import SeatAvailability

router = APIRouter(
    prefix="/seats",
    tags=["Seats"]
)

@router.get("/availability/{schedule_id}", response_model=SeatAvailability)
def get_seat_availability(schedule_id: int, db: Session = Depends(get_db)):
    # Get schedule
    schedule = db.query(Schedule).filter(Schedule.id == schedule_id).first()
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")

    # Get bus
    bus = db.query(Bus).filter(Bus.id == schedule.bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")

    total_seats = bus.capacity

    # Get booked seats
    tickets = db.query(Ticket).filter(
        Ticket.schedule_id == schedule_id
    ).all()

    booked_seats = [t.seat_number for t in tickets]
    available_seats = [
        seat for seat in range(1, total_seats + 1)
        if seat not in booked_seats
    ]

    return {
        "schedule_id": schedule_id,
        "total_seats": total_seats,
        "booked_seats": booked_seats,
        "available_seats": available_seats
    }
