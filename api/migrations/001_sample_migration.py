steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reservation (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            jump_date DATE NOT NULL,
            jumper_text TEXT 
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reservation;
        """
    ],
]
