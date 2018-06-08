CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(20),
    password varchar(20),
    profile_pic text
)