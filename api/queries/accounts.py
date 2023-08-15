from pydantic import BaseModel
from queries.pool import pool

class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email: str
    password: str
    first_name: str
    last_name: str
    username: str

class AccountOut(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    username: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries:
    # def get(self, email: str) -> AccountOut:
    #     pass

    def create(self, account: AccountIn, hashed_password: str) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result =  db.execute(
                        """
                    INSERT INTO reservation
                        (first_name, last_name, email, hashed_password, username)
                    VALUES
                        (%s,%s,%s,%s,%s)
                    RETURNING id;
                    """,
                    [
                        account.first_name,
                        account.last_name,
                        hashed_password,
                        account.email,
                        account.username,
                    ]
                )
                id = result.fetchone()[0]
                data = account.dict()
                return AccountOutWithPassword(id=id, **data, hashed_password=hashed_password)
