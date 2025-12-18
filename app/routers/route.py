# app/routers/route.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.models.route import Route
from app.schemas.route import RouteCreate, RouteOut

router = APIRouter(
    prefix="/routes",
    tags=["Routes"]
)

# Create a new route
@router.post("/", response_model=RouteOut)
def create_route(route: RouteCreate, db: Session = Depends(get_db)):
    db_route = Route(**route.dict())
    db.add(db_route)
    db.commit()
    db.refresh(db_route)
    return db_route

# Get all routes
@router.get("/", response_model=List[RouteOut])
def get_routes(db: Session = Depends(get_db)):
    return db.query(Route).all()

# Get a single route by ID
@router.get("/{route_id}", response_model=RouteOut)
def get_route(route_id: int, db: Session = Depends(get_db)):
    route = db.query(Route).filter(Route.id == route_id).first()
    if not route:
        raise HTTPException(status_code=404, detail="Route not found")
    return route
