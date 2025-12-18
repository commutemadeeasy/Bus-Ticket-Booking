from sqlalchemy import Column, Integer, String
from app.database import Base

class Bus(Base):
    __tablename__ = "buses"
    id = Column(Integer, primary_key=True, index=True)
    plate_number = Column(String, unique=True, nullable=False)
    capacity = Column(Integer, nullable=False)
    model = Column(String, nullable=True)
