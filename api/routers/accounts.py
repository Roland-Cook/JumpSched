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
    tags = ['accounts']
)





@router.post("/api/accounts", response_model=AccountOut | HttpError)
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

    return AccountOut(**account.dict())


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



@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountIn = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
