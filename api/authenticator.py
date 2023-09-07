import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountOut, AccountQueries, AccountOutWithPassword


class ExampleAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,
        accounts: AccountQueries,
    ):
        return accounts.get(email)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):
        return account.username, AccountOut(**account.dict())


authenticator = ExampleAuthenticator(os.environ["SIGNING_KEY"])
