from queries.pool import pool
from typing import Optional, List, Union
from pydantic import BaseModel

class TestimonialIn(BaseModel):
    Full_Name: str
    description: str
    rating: int


class TestimonialOut(BaseModel):
    id: int
    Full_Name: str
    description: str
    rating: int

class Testimonialrepository:
    def create(self,testimonial: TestimonialIn)-> TestimonialOut:
        # connect to db
        with pool.connection() as conn:
            # get cursor
            with conn.cursor() as db:
                result= db.execute(
                        """
                          INSERT INTO testimonial
                          (Full_name, Description, Rating)
                          VALUES
                            (%s,%s,%s)
                          RETURNING id
                        """,
                        [
                            testimonial.Full_Name,
                            testimonial.description,
                            testimonial.rating
                        ]
                    )
                id= result.fetchone()[0]
                data=testimonial.dict()
                return TestimonialOut(id=id,**data)


    def get_all_test(self) -> Union[Exception, List[TestimonialOut]]:
        try:
            print("roland")
            #connect to database
            with pool.connection() as conn:
                #get cursor
                with conn.cursor() as db:
                    #run insert statement
                    result = db.execute(
                        """
                        SELECT id, Full_Name, description, rating
                        FROM testimonial
                        ORDER BY rating
                        """
                        )
                    result = []
                    for res in db:
                        print("RESULTTTTT:",result)
                        testimonial = TestimonialOut(
                            id=res[0],
                            Full_Name=res[1],
                            description=res[2],
                            rating=res[3],
                        )
                        result.append(testimonial)
                        print("RESULTTTTT:",result)
                    return result
        except Exception as e:
            return{"message": "Could not find testimonials"}


    def delete_testimonial(self,testimonial_id:int)->bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM testimonial
                        WHERE id = %s
                        """,
                        [testimonial_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False