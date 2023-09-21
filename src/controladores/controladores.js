const controlador = {};

const { Console, error, log } = require("console");
const { query } = require("express");
const connection = require("express-myconnection");
const fs = require("fs");
const { get } = require("http");
const multer = require("multer");

controlador.zonaIndex=(consulta,respuesta)=>{
    respuesta.render("index.ejs")
}
controlador.zonaRegistro=(consulta,respuesta)=>{
    respuesta.render("registro.ejs")
}
controlador.zonaMetodos=(consulta,respuesta)=>{
    respuesta.render("metodo.ejs")
}
controlador.zonaInicio=(consulta,respuesta)=>{
    respuesta.render("inicio.ejs")
}
controlador.zonaOrigen=(consulta,respuesta)=>{
    respuesta.render("origen.ejs")
}


module.exports = controlador;