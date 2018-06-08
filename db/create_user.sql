INSERT INTO users (username, password, profile_pic)
VALUES ($1, $2, $3);

SELECT * from users
WHERE username = $1;