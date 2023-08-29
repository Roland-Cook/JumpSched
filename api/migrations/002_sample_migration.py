steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reservation (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            phone_number VARCHAR(100),
            email VARCHAR(100),
            jumper_type TEXT check(jumper_type = 'fun_jumper' or jumper_type = 'tandem' or jumper_type = 'student'),
            date DATE ,
            time TIME,
            status VARCHAR(100) 
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reservation;
        """
    ],
]
