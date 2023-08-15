from fastapi import APIRouter, Depends, HTTPException, status
from queries.accounts import AccountIn, AccountOut, AccountOutWithPassword, AccountQueries


router = APIRouter()



@router.post("/account")
def create_account(
        account: AccountIn,
        repo: AccountQueries = Depends()
):
    return repo.create(account)
