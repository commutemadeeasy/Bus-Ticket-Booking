from sqlalchemy import Column, Integer, ForeignKey, DateTime,String
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    schedule_id = Column(Integer, ForeignKey("schedules.id"), nullable=False)
    seat_number = Column(Integer, nullable=False)
    booked_at = Column(DateTime(timezone=True), server_default=func.now())
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    payment_status = Column(String, default="pending")



    user = relationship("User")
    schedule = relationship("Schedule")
