from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union, Optional

class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    password: str
    first_name: str
    last_name: str
    email: str
    username: str
    profile_image:Optional[str]

class AccountOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    username: str
    profile_image:Optional[str]

class AccountOutWithPassword(AccountOut):
    hashed_password: str
    profile_image:Optional[str]



class AccountQueries:
    try:
        def get(self, email: str) -> AccountOutWithPassword:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                            first_name,
                            last_name,
                            hashed_password,
                            email,
                            username,
                            profile_image
                    FROM account
                    WHERE email = %s
                        """,
                        [email]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    account = AccountOutWithPassword(
                            id=record[0],
                            first_name=record[1],
                            last_name=record[2],
                            hashed_password=record[3],
                            email=record[4],
                            username=record[5],
                            profile_image=record[6]
                        )
                    return account
    except Exception as e:
        print(e)

    def create(self, account: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                        """
                    INSERT INTO account
                        (first_name, last_name, email, hashed_password, username, profile_image)
                    VALUES
                        (%s,%s,%s,%s,%s,%s)
                    RETURNING id;
                    """,
                    [
                        account.first_name,
                        account.last_name,
                        account.email,
                        hashed_password,
                        account.username,
                        account.profile_image
                    ]
                )
                id = result.fetchone()[0]
                data = account.dict()
                return AccountOutWithPassword(id=id, **data, hashed_password=hashed_password)


    def get_all_accounts(self) -> Union[Exception, List[AccountOutWithPassword]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, first_name, last_name, email, hashed_password, username, profile_image
                        FROM account
                        ORDER BY first_name
                        """
                        )
                    result = []
                    for record in db:
                        account = AccountOutWithPassword(
                            id=record[0],
                            first_name=record[1],
                            last_name=record[2],
                            email=record[3],
                            hashed_password=record[4],
                            username=record[5],
                            profile_image=record[6]
                        )
                        result.append(account)
                    return result
        except Exception as e:
            return {"message": "Could not find accounts",}

    def delete_account(self, account_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM account
                        WHERE id = %s
                        """,
                        [account_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
