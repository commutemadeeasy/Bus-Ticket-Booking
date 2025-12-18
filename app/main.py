from fastapi import FastAPI
from app.database import Base, engine
from app.routers import auth, bus, route, schedule ,ticket,seat,payment # <- include the new routers


app = FastAPI(title="Bus Ticket Booking API")

# Create all tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth)
app.include_router(bus)
app.include_router(route)
app.include_router(schedule)
app.include_router(ticket)
app.include_router(seat)
app.include_router(payment.router)




@app.get("/")
def root():
    return {"message": "Bus Ticket Booking API is running"}
