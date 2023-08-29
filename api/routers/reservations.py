from fastapi import APIRouter, Depends, HTTPException, status
# from auth import User, get_current_user
from queries.reservations import ReservationIn, UpdateStatusIn,UpdateStatusOut ,Reservationrepository, ReservationOut
from typing import Optional, List, Union


# import databases

router = APIRouter(
    tags = ['reservation']
)


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

@router.get("/reservation", response_model=List[ReservationOut])
def get_all(
        repo:Reservationrepository = Depends(),
):
        return repo.get_all()

@router.get("/reservation/{id}", response_model=ReservationOut)
def get_reservation(
        id:int,
        repo:Reservationrepository = Depends(),
):
        return repo.get(id)

@router.delete("/reservation/{reservation_id}", response_model=bool)
def delete_test(
    reservation_id:int,
    repo:Reservationrepository=Depends(),
)-> bool:
    return repo.delete_reservation(reservation_id)


@router.put("/reservation/{reservation_id}", response_model=UpdateStatusIn)
def update_reservation(
       reservation_id:int,
       reservation:UpdateStatusIn,
       repo: Reservationrepository = Depends(),
) -> ReservationOut:
       print("TESTING", reservation.dict())
       return repo.update(reservation_id,reservation)

    # query = """
    #     INSERT INTO reservations (first_name, last_name, phone_number, email, tandem, student, freejump, date, time)
    #     VALUES (:first_name, :last_name, :phone_number, :email, :tandem, :student, :freejump, :date, :time)
    #     RETURNING id
    # """

    # query = "SELECT * FROM reservations"
    # result = await database.fetch_all(query)
