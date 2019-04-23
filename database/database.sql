CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE juego(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(250),
    descripcion VARCHAR(350),
    imagen VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE juego to juegos;

DESCRIBE juegos;