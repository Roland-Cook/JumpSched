steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reservation (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            phone_number VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            jumper_type TEXT NOT NULL REFERENCES jumper("name"),
            date DATE NOT NULL,
            time TIME NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reservation;
        """
    ],
]
