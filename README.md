A simple dashboard project for tracking weekly goals 


##To set up the db 


If not using vercel change the db querys


```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  username VARCHAR(255)
);
```

Insert a row for testing:

```
INSERT INTO users (id, email, name, username) VALUES (1, 'me@site.com', 'Me', 'username');
```
```
CREATE TABLE Goals (
    GoalID SERIAL PRIMARY KEY,
    GoalName VARCHAR(255) NOT NULL,
    Description TEXT,
    UserID INT NOT NULL,
    TargetDate DATE,
    IsCompleted BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_users
        FOREIGN KEY (UserID)
        REFERENCES Users(Id)
);
```