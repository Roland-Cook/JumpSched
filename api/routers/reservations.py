from fastapi import APIRouter, Depends
from queries.reservations import ReservationIn, UpdateStatusIn, Reservationrepository, ReservationOut
from typing import List



router = APIRouter(
    tags = ['reservation']
)


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
       return repo.update(reservation_id,reservation)
