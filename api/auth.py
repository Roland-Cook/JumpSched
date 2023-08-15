# from fastapi.security import OAuth2PasswordBearer
# from jose import jwt, JWTError
# from fastapi import Depends
# from passlib.context import CryptContext
# from datetime import datetime, timedelta
# from pydantic import BaseModel
# import os
# import databases

# SECRET_KEY = "your-secret-key"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 30

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# class Token(BaseModel):
#     access_token: str
#     token_type: str


# class TokenData(BaseModel):
#     username: str


# class User(BaseModel):
#     username: str


# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# def verify_password(plain_password, hashed_password):
#     return pwd_context.verify(plain_password, hashed_password)


# def get_password_hash(password):
#     return pwd_context.hash(password)


# def create_access_token(data: dict):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt


# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     credentials_exception = HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Could not validate credentials",
#         headers={"WWW-Authenticate": "Bearer"},
#     )
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         username: str = payload.get("sub")
#         if username is None:
#             raise credentials_exception
#         token_data = TokenData(username=username)
#     except JWTError:
#         raise credentials_exception
#     return token_data


# async def authenticate_user(database, username: str, password: str):
#     query = "SELECT * FROM users WHERE username = :username"
#     user_data = await database.fetch_one(query=query, values={"username": username})

#     if user_data and verify_password(password, user_data["hashed_password"]):
#         return User(username=username)
    
#     return None

# # Establish connection to your PostgreSQL database
# DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://admin:password@postgres:5432/jumpsched")
# database = databases.Database(DATABASE_URL)
