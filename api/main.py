from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import reservations, accounts, testimonial
import os
# import databases
# from auth import User, get_current_user, create_access_token, verify_password, authenticate_user, Token
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()
app.include_router(reservations.router )
app.include_router(accounts.router)
app.include_router(authenticator.router)
app.include_router(testimonial.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





# DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://admin:password@postgres:5432/jumpsched")
# database = databases.Database(DATABASE_URL)

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# @app.get("/reservations")
# async def get_reservations(current_user: User = Depends(get_current_user)):
#     query = "SELECT * FROM reservations"
#     result = await database.fetch_all(query)
#     return result


# @app.post("/reservation")
# async def create_reservation(reservation: Reservation, current_user: User = Depends(get_current_user)):
#     query = """
#         INSERT INTO reservations (first_name, last_name, phone_number, email, tandem, student, freejump, date, time)
#         VALUES (:first_name, :last_name, :phone_number, :email, :tandem, :student, :freejump, :date, :time)
#         RETURNING id
#     """
#     values = reservation.dict()
#     last_record_id = await database.execute(query=query, values=values)
#     return {"id": last_record_id, **reservation.dict()}


# @app.post("/token", response_model=Token)
# async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
#     user = await authenticate_user(database, form_data.username, form_data.password)
#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect username or password",
#             headers={"WWW-Authenticate": "Bearer"},
#         )
#     access_token = create_access_token({"sub": user.username})
#     return {"access_token": access_token, "token_type": "bearer"}
