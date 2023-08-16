steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE jumper (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL UNIQUE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE jumper;
        """
    ],
]
