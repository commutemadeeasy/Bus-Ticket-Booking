from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.ticket import Ticket
from app.models.schedule import Schedule
from app.models.bus import Bus
from app.schemas.ticket import TicketCreate, TicketOut
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/tickets",
    tags=["Tickets"]
)

@router.post("/book", response_model=TicketOut)
def book_ticket(
    ticket: TicketCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    # Check schedule exists
    schedule = db.query(Schedule).filter(Schedule.id == ticket.schedule_id).first()
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")

    # Get bus capacity
    bus = db.query(Bus).filter(Bus.id == schedule.bus_id).first()

    if ticket.seat_number < 1 or ticket.seat_number > bus.capacity:
        raise HTTPException(status_code=400, detail="Invalid seat number")

    # Check if seat already booked
    existing_ticket = db.query(Ticket).filter(
        Ticket.schedule_id == ticket.schedule_id,
        Ticket.seat_number == ticket.seat_number
    ).first()

    if existing_ticket:
        raise HTTPException(status_code=400, detail="Seat already booked")

    new_ticket = Ticket(
        user_id=current_user.id,
        schedule_id=ticket.schedule_id,
        seat_number=ticket.seat_number,
        booked_by=current_user.role,
    )

    db.add(new_ticket)
    db.commit()
    db.refresh(new_ticket)

    return new_ticket
