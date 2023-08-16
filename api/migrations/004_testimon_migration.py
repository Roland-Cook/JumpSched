steps = [
    [
       # "Up" SQL statement
       """
        CREATE TABLE testimonial(
        id SERIAL PRIMARY KEY NOT NULL,
        Full_Name VARCHAR(100) NOT NULL,
        description VARCHAR(200) NOT NULL,
        rating SMALLINT NOT NULL check (rating between 1 and 5)
        )
       """,
       #"down" sql statement
       """
        DROP TABLE testimonial;
       """
    ],
]