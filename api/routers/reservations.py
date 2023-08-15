from fastapi import APIRouter, Depends, HTTPException, status
# from auth import User, get_current_user
from queries.reservations import ReservationIn, Reservationrepository

# import databases

router = APIRouter()

# # Assuming you've already defined your database instance somewhere
# database = databases.Database(DATABASE_URL)


# @router.get("/reservations")
# async def get_reservations(current_user: User = Depends(get_current_user)):
#     query = "SELECT * FROM reservations"
#     result = await database.fetch_all(query)
#     return result


@router.post("/reservation")
def create_reservation(
        reservation: ReservationIn,
        repo: Reservationrepository = Depends()
):
        return repo.create(reservation)




    # query = """
    #     INSERT INTO reservations (first_name, last_name, phone_number, email, tandem, student, freejump, date, time)
    #     VALUES (:first_name, :last_name, :phone_number, :email, :tandem, :student, :freejump, :date, :time)
    #     RETURNING id
    # """

    # query = "SELECT * FROM reservations"
    # result = await database.fetch_all(query)
