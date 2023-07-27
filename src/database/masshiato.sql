drop database if exists masshiato;
create database masshiato;
use masshiato;
drop table if exists registro;
create table registro (
    id int primary key auto_increment, 
    nombre varchar(30),
    apellido varchar(30),
    telefono varchar(30),
    correo varchar(50),
    contrasena varchar(30),
    direccion varchar(50)
);
insert into registro(nombre, correo, contrasena)values ("admin","admin","admin");