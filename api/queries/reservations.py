from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool
from datetime import date,time



class ReservationIn(BaseModel):
    first_name: str
    last_name: str
    phone_number: str
    email: str
    jumper_type: str
    date: date
    time: time
    status: str

class ReservationOut(BaseModel):
    id:int
    first_name: str
    last_name: str
    phone_number: str
    email: str
    jumper_type: str
    date: date
    time: time
    status: str

class UpdateStatusIn(BaseModel):
    status: str


class UpdateStatusOut(BaseModel):
    id: int
    status: str




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
                            (first_name, last_name, phone_number, email, jumper_type, date, time, status)
                        VALUES
                            (%s,%s,%s,%s,%s,%s,%s,%s)
                        RETURNING id;
                        """,
                        [
                            reservation.first_name,
                            reservation.last_name,
                            reservation.phone_number,
                            reservation.email,
                            reservation.jumper_type,
                            reservation.date,
                            reservation.time,
                            reservation.status,
                        ]
                    )
                id = result.fetchone()[0]
                data = reservation.dict()
                print(result)
                return ReservationOut(id=id,**data)
                #return new data




    try:
        def get(self, id:int) -> ReservationOut:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, 
                            first_name, 
                            last_name, 
                            phone_number, 
                            email, 
                            jumper_type, 
                            date, 
                            time, 
                            status
                    FROM reservation
                    WHERE id = %s

                        """,
                        [id]
                    )
                    res = result.fetchone()
                    if res is None:
                        return None
                    reservation = ReservationOut(
                            id=res[0],
                            first_name=res[1],
                            last_name=res[2],
                            phone_number=res[3],
                            email=res[4],
                            jumper_type=res[5],
                            date=res[6],
                            time = res[7],
                            status = res[8]
                        )
                    return reservation
    except Exception as e:
        print(e)



    def get_all(self) -> Union[Exception, List[ReservationOut]]:
        try:
           # connect to database
            with pool.connection() as conn:
                # get cursor
                with conn.cursor() as db:
                    # run insert statment
                    result =  db.execute(
                        """
                        SELECT id, first_name, last_name, phone_number, email, jumper_type, date, time, status
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
                            status = res[8]
                        )
                        result.append(reservation)
                    return result
                    #return new data
        except Exception as e:
            print(e)
            return {"message": "Could not get all reservatons"}


    def delete_reservation(self,reservation_id:int)->bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM reservation
                        WHERE id = %s
                        """,
                        [reservation_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False


    def update(self,reservation_id:int, reservation:UpdateStatusIn) -> UpdateStatusOut:
        print(reservation,reservation_id)
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE reservation
                        SET status = %s
                        WHERE id = %s
                        """,
                        [
                            reservation.status,
                            reservation_id,
                        ]
                    )
                    # data = db.fetchone()
                    # print(data)
                    old_data = reservation.dict()
                    # return self.reservation_in_to_out(reservation_id,reservation)
                    return UpdateStatusIn(id=reservation_id, **old_data )
                

                    
        except Exception as e:
            print(e)
            return {"MESSAGE:Could not update reservation"}
        

    def reservation_in_to_out(self, id:int, reservation:UpdateStatusIn):
        old_data = reservation.dict()
        return ReservationOut(id=id, **old_data)
