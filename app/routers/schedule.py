# app/routers/schedule.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta

from app.database import get_db
from app.models.schedule import Schedule
from app.models.route import Route
from app.schemas.schedule import ScheduleCreate, ScheduleOut

router = APIRouter(
    prefix="/schedules",
    tags=["Schedules"]
)

@router.post("/", response_model=ScheduleOut)
def create_schedule(schedule: ScheduleCreate, db: Session = Depends(get_db)):
    # Fetch route duration
    route = db.query(Route).filter(Route.id == schedule.route_id).first()
    if not route:
        raise HTTPException(status_code=404, detail="Route not found")

    # Compute arrival_time automatically
    arrival_time = schedule.departure_time + timedelta(minutes=route.duration_minutes)

    db_schedule = Schedule(
        bus_id=schedule.bus_id,
        route_id=schedule.route_id,
        departure_time=schedule.departure_time,
        arrival_time=arrival_time
    )
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule

# Optional: GET all schedules
@router.get("/", response_model=list[ScheduleOut])
def get_schedules(db: Session = Depends(get_db)):
    return db.query(Schedule).all()
