DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;

CREATE TABLE IF NOT EXISTS users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username CHAR(20) NOT NULL,
    password CHAR(42) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name CHAR(255) NOT NULL,
    color CHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    project_id INT(11) NOT NULL DEFAULT 1,
    done BOOL NOT NULL DEFAULT FALSE,
    name CHAR(255) NOT NULL,
    start_datetime DATETIME,
    end_datetime DATETIME,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    done_at DATETIME,
    description TEXT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

INSERT INTO users (username, password) VALUES ('root', PASSWORD('coffee'));
