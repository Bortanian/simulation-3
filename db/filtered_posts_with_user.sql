SELECT posts.id, title, username, profile_pic FROM posts
JOIN users ON users.id = posts.author_id
WHERE title LIKE $1