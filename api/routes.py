from fastapi import APIRouter, Depends, HTTPException, status
from auth import User, get_current_user
import databases

router = APIRouter()

# Assuming you've already defined your database instance somewhere
database = databases.Database(DATABASE_URL)


@router.get("/reservations")
async def get_reservations(current_user: User = Depends(get_current_user)):
    query = "SELECT * FROM reservations"
    result = await database.fetch_all(query)
    return result


@router.post("/reservation")
async def create_reservation(reservation: Reservation, current_user: User = Depends(get_current_user)):
    query = """
        INSERT INTO reservations (first_name, last_name, phone_number, email, tandem, student, freejump, date, time)
        VALUES (:first_name, :last_name, :phone_number, :email, :tandem, :student, :freejump, :date, :time)
        RETURNING id
    """
    values = reservation.dict()
    last_record_id = await database.execute(query=query, values=values)
    return {"id": last_record_id, **reservation.dict()}
