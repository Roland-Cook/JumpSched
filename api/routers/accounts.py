# router.py
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from typing import Optional, List, Union
from pydantic import BaseModel

from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter(
    prefix = "/accounts",
    tags = ['accounts']
)


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.get("/accounts/all", response_model=List[AccountOut])
def get_all_accounts(
    accounts: AccountQueries = Depends(),
):
    return accounts.get_all_accounts()

@router.get("/accounts/{email}", response_model=AccountOut)
def get_account(
    email: str,
    accounts: AccountQueries = Depends(),
) -> bool:
    return accounts.get(email)


@router.delete("/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id: int,
    account: AccountQueries = Depends(),
) -> bool:
    return account.delete_account(account_id)
