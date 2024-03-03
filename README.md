# Weekly Goals

> Super simple planner for setting weekly goals 

## Introduction

A brief introduction that explains **what** the project is and **why** it's useful. Highlight the problem your project solves and what makes it stand out from the crowd.

## Features

- **Set goals:** Set goals to achive for the week.
- **Statistics:** Track your progress.


## Quick Start

### To set up the db 

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

```bash
# Clone the repository
git clone https://github.com/atenghamn/weekly-goals.git

# Navigate to the directory
cd weekly-goals

# Install dependencies
npm install

# Start the project
npm run dev
-> localhost:3000

##TODO

- [ ] CSS - it looks like shit...
- [ ] Set up statistics
- [ ] Fix so you can plan ahead
- [ ] User handling

