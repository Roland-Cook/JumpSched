from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool
from datetime import date,time


class Jumper(BaseModel):
    name:str

class ReservationIn(BaseModel):
    first_name: str
    last_name: str
    phone_number: str
    email: str
    jumper_type: str
    date: date
    time: time

class ReservationOut(BaseModel):
    id:int
    first_name: str
    last_name: str
    phone_number: str
    email: str
    jumper_type: str
    date: date
    time: time

class Reservationrepository:
    def create(self, reservation: ReservationIn) -> ReservationOut:
        # connect to database
        with pool.connection() as conn:
            # get cursor
            with conn.cursor() as db:
                # run insert statment
                result =  db.execute(
                         """
                        INSERT INTO reservation
                            (first_name, last_name, phone_number, email, jumper_type, date, time)
                        VALUES
                            (%s,%s,%s,%s,%s,%s,%s)
                        RETURNING id;
                        """,
                        [
                            reservation.first_name,
                            reservation.last_name,
                            reservation.phone_number,
                            reservation.email,
                            reservation.jumper_type,
                            reservation.date,
                            reservation.time
                        ]
                    )
                id = result.fetchone()[0]
                data = reservation.dict()
                return ReservationOut(id=id, **data)
                #return new data

    def get_all(self) -> Union[Exception, List[ReservationOut]]:
        try:
           # connect to database
            with pool.connection() as conn:
                # get cursor
                with conn.cursor() as db:
                    # run insert statment
                    result =  db.execute(
                        """
                        SELECT id, first_name, last_name, phone_number, email, jumper_type, date, time
                        FROM reservation
                        ORDER BY date
                        """
                        )
                    result = []
                    for res in db:
                        reservation = ReservationOut(
                            id=res[0],
                            first_name=res[1],
                            last_name=res[2],
                            phone_number=res[3],
                            email=res[4],
                            jumper_type=res[5],
                            date=res[6],
                            time = res[7],
                        )
                        result.append(reservation)
                    return result
                    #return new data
        except Exception as e:
            print(e)
            return {"message": "Could not get all reservatons"}
