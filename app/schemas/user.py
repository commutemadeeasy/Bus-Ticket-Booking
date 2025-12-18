from pydantic import BaseModel
from datetime import datetime

# Shared fields
class UserBase(BaseModel):
    name: str
    phone: str

# Request: Register
class UserCreate(UserBase):
    password: str
    role: str = "user"  # user | agent | admin

# Response: Read
class UserRead(UserBase):
    id: int
    role: str
    created_at: datetime

    class Config:
        from_attributes = True
