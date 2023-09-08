## Project Documentation



# JumpSched

- Nate Gallegos
- Derrick Mitchel
- Roland Cook
- Pedro De Jesus

We created a full stack app that allows users to sign-up for skyidives. We created some other pages for the site that display pricing, common questions, and a gallery on a carousel.
The team also created components that allow users to create an account, view the manifest for a given day. We also thought it a good idea to create a profile for the user that allows them to cancel their jumps, or finish their jumps depending. The completed jumps will display a list of only "completed" jumps. 

## Design

- [API design](docs/api-design.md)

## Intended market

We are targeting business owners that run their own drop zones, we provide a better solution that enables the business to give their customers an all inclusive skydiving experience. This application allows for companies to better schedule jumps while also being able to uniquely identify customers and their needs.

## Functionality

- Visitors of the site can learn more information about the company, and skydiving as a whole:
  - FAQ page that answers any questions customers may have about skydiving or about the business itself.
  - The prices page to allows customers to see the price of every service offered. 
- Users can also see testimonials left by other users. Logged in users can see testimonials and the form allowing them to create their own.
- Reservation page that allows any user to book a jump. The logged in users who book can see those jumps on their profile page and also mark the jump as completed or cancelled.
- Manifest page lets logged in users see every jump and its status, this allows for the user and the business to better book jumps.
- Accounts
- Logged in users can add new testimonials, view/update their scheduled jumps.
- About Section with company info, contact info.
- Social Media Links/Contact at the footer
- Main Page allows visitors to see the 5 day weather forecast. Main page also includes more information about the business including a contact us and a company video. Also includes links to other services.
- The cart features products that was added from the product page
  - update quantity with an increment and decrement counter
  - can checkout and will populate the order end point


## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create module3-project-gamma_postgres_data`
4. Run `docker compose build`
5. Run `docker compose up`
6. Run `docker exec -it module3-project-gamma-fastapi-1 bash`
7. Run  `python -m migrations up`
8. Exit the container's CLI, and enjoy JumpSched!


