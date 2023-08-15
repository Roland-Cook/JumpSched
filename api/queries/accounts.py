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
    try:
        def get(self, email: str) -> AccountOut:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        Select id,
                        first_name,
                        last_name,
                        hashed_password,
                        email,
                        username
                    From account
                    WHERE email = %s
                        """,
                        [email]
                    )
                    record = result.fetchone()[0]
                    if record is None:
                        return None
                    account = AccountOutWithPassword(
                            id=record[0],
                            email=record[1],
                            first_name=record[2],
                            last_name=record[3],
                            username=record[4]
                        )
                    return account
    except Exception as e:
        print(e)
        






    def create(self, account: AccountIn, hashed_password: str) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                        """
                    INSERT INTO account
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
