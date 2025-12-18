from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.ticket import Ticket
from app.models.payment import Payment
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/payments",
    tags=["Payments"]
)

@router.post("/initiate/{ticket_id}")
def initiate_payment(
    ticket_id: int,
    provider: str,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()

    if not ticket or ticket.user_id != current_user.id:
        raise HTTPException(status_code=404, detail="Ticket not found")

    if ticket.payment_status == "paid":
        raise HTTPException(status_code=400, detail="Already paid")

    payment = Payment(
        ticket_id=ticket.id,
        provider=provider,
        amount=500  # example amount
    )

    db.add(payment)
    db.commit()
    db.refresh(payment)

    return {
        "payment_id": payment.id,
        "provider": provider,
        "message": "Payment initiated"
    }


@router.get("/esewa/success")
def esewa_success(
    oid: str,
    amt: float,
    refId: str,
    db: Session = Depends(get_db)
):
    payment = db.query(Payment).filter(Payment.id == int(oid)).first()

    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")

    payment.status = "success"
    payment.transaction_id = refId

    ticket = db.query(Ticket).filter(Ticket.id == payment.ticket_id).first()
    ticket.payment_status = "paid"

    db.commit()

    return {"message": "Payment successful"}


@router.get("/esewa/failure")
def esewa_failure(
    oid: str,
    db: Session = Depends(get_db)
):
    payment = db.query(Payment).filter(Payment.id == int(oid)).first()

    if payment:
        payment.status = "failed"
        db.commit()

    return {"message": "Payment failed"}




