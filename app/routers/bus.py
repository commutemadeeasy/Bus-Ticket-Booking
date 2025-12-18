from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.bus import Bus
from app.schemas.bus import BusCreate

router = APIRouter()

@router.post("/buses/")
def create_bus(bus: BusCreate, db: Session = Depends(get_db)):
    db_bus = Bus(**bus.dict())
    db.add(db_bus)
    db.commit()
    db.refresh(db_bus)
    return db_bus
