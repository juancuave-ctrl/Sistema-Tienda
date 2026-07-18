CREATE DATABASE IF NOT EXISTS tienda;

USE tienda;

CREATE TABLE usuarios (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    correo VARCHAR(100) NOT NULL,

    password VARCHAR(255) NOT NULL

);

CREATE TABLE productos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    precio DECIMAL(10,2) NOT NULL,

    cantidad INT NOT NULL

);

INSERT INTO usuarios(nombre,correo,password)

VALUES

('Juan David','juan@gmail.com','123456'),

('Maria','maria@gmail.com','654321');

INSERT INTO productos(nombre,precio,cantidad)

VALUES

('Teclado',85000,10),

('Mouse',45000,20),

('Monitor',750000,5);