
# JumpSched

JumpSched is a project designed to allow users to signup for a skydive, and allows the company to create manifests. The users are responsible for finishing/canceling the jump, which then updates the manifest.

## API Reference

#### RESERVATIONS
#### Get all reservations

```http
  GET /reservations
```
input: None

output:[{
    
    "id": 0,
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "email": "string",
    "jumper_type": "string",
    "date": "2023-09-08",
    "time": "string",
    "status": "string"
}]

This endpoint retrieves a list of all scheduled reservations.

#### Create reservation

```http
  POST /reservation
```
input: {
    
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "email": "string",
    "jumper_type": "string",
    "date": "2023-09-08",
    "time": "string",
    "status": "string"
  }

output: {
    
    "id":int
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "email": "string",
    "jumper_type": "string",
    "date": "2023-09-08",
    "time": "string",
    "status": "string"
    
}

This endpoint creates a reservation on the backend and saves the first and last name, phone number, email, jumper type, date, time of reservation and a default status and assigns an ID.


#### Get single reservation

```http
    GET /reservation/{id}
```
input:None

output: {
    
    "id": 0,
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "email": "string",
    "jumper_type": "string",
    "date": "2023-09-08",
    "time": "string",
    "status": "string"
}

#### update reservation
```http
  PUT/reservation/{reservation_id}
``` 
input: {
    
    "status":"string"
}

output:{
    
    "status":"string"
}

This updates the reservation from the default status. The options are canceled or finished.


#### ACCOUNTS
```http
    POST/api/accounts
```
####Create ACCOUNT

input: {
    
    "password": "string",
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "username": "string"
}

output: {
    
    "id": int,
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "username": "string"
}

```http
    GET /accounts/all
```
input: None

output:

[{
    
    "id": "string",
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "username": "string"
  }

]

```http
    GET /accounts/{email}
```
input: None

output:

{
    
    "id": "string",
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "username": "string"
}

```http
    Delete /accounts/{accounts_id}
```
input: accounts_id

output: bool

#### Login/logout

```http
    POST  /token
```
request shape(form):
    
    email:"email"
    password:"string"

response: access token and token type

Response shape(JSON):

{
    
    "access_token": "string",
    "token_type": "Bearer"
}

```http
  Delete /token
```
Request shape: None

Response: Always True

Response shape(JSON):

{
    "message": true
}


#### Testimonials

```http
    GET /tesimonial (all)
```
input: None

output:

[{
    
    "id": 0,
    "Full_Name": "string",
    "description": "string",
    "rating": 0
}]


```http
    POST/tesimonial
```
input: 

{
    
    "Full_Name": "string",
    "description": "string",
    "rating": 0
}

output: 
{
    "content":"string"
  }

```http
    Delete /testimonial/{testimonial_id}
```
Response: deletes testimonial 

Response Shape(JSON):

{
    
    "message": boolean
}