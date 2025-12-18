# app/models/route.py
from sqlalchemy import Column, Integer, String
from app.database import Base

class Route(Base):
    __tablename__ = "routes"
    
    id = Column(Integer, primary_key=True, index=True)
    origin = Column(String, nullable=False)
    destination = Column(String, nullable=False)
    distance_km = Column(Integer, nullable=False)
    duration_minutes = Column(Integer, nullable=False)