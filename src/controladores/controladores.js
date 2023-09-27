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
controlador.zonaTipoCafe=(consulta,respuesta)=>{
    respuesta.render("tiposCafe.ejs")
}
controlador.zonaMenu=(consulta,respuesta)=>{
    respuesta.render("menu.ejs")
}
controlador.zonaContactanos=(consulta,respuesta)=>{
    respuesta.render("contactanos.ejs")
}

//registrar usuario
controlador.zonaRegistroUsuario=(consulta,respuesta)=>{
    let registrarse = consulta.body;
    console.log(registrarse);
    consulta.getConnection((error,conexion)=>{
        conexion.query("insert into registro set ?", [registrarse], (error, registro)=>{
            respuesta.render('/');
        });
    });
};
//fin registrar usuario


module.exports = controlador;