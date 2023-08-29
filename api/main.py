from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import reservations, accounts, testimonial
import os
# import databases
# from auth import User, get_current_user, create_access_token, verify_password, authenticate_user, Token
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(reservations.router )
app.include_router(accounts.router)
app.include_router(authenticator.router)
app.include_router(testimonial.router)
