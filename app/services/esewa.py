def esewa_payload(payment_id: int, amount: float):
    return {
        "amt": amount,
        "pdc": 0,
        "psc": 0,
        "txAmt": 0,
        "tAmt": amount,
        "pid": payment_id,
        "scd": "EPAYTEST",
        "su": "http://localhost:8000/payments/esewa/success",
        "fu": "http://localhost:8000/payments/esewa/failure"
    }
