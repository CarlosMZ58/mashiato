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
controlador.zonaCambiarContrasena=(consulta,respuesta)=>{
    respuesta.render("cambiarContrasena.ejs")
}
controlador.zonaEliminaUsuario=(consulta,respuesta)=>{
    respuesta.render("eliminarUsuario.ejs")
}


//registrar usuario
controlador.zonaRegistroUsuario=(consulta,respuesta)=>{
    let registro=consulta.body;
    console.log(registro);
    consulta.getConnection((error,conexion)=>{
        conexion.query('insert into registro set ?',[registro],(error,registro)=>{
            if(error){
                console.error("Error al conectar a la base de datos: " + error.message);
            }else{
                console.log("Datos del formulario recibidos:", registro);
                respuesta.render('index.ejs');
            }
        });
    });
}

//fin registrar usuario


//inicio de sesion
controlador.zonaInicioSesion=(consulta,respuesta)=>{
    let correo=consulta.body.correo;
    let contrasena=consulta.body.contrasena
    console.log(correo);
    console.log(contrasena);
    consulta.getConnection((error,conexion)=>{
        conexion.query("select * from registro where correo=? and contrasena=?",[correo, contrasena],(error,inicio)=>{
            console.log(inicio);
            if(inicio.length !==0){
                respuesta.redirect("/");
            }else{
                respuesta.render("inicio.ejs");
            }
        });
    });
}
//fin inicio de sesion
//cambiar contraseña
controlador.zonaNuevaContrasena=(consulta,respuesta)=>{
    let correo=consulta.body.correo;
    let contrasena=consulta.body.contrasena;
        consulta.getConnection((error,conexion)=>{
            conexion.query("select * from registro where correo=?", [correo],(error,resultadoConsulta)=>{
                if(error){
                    console.log(error);
                }else{
                    conexion.query("update registro set contrasena=? where correo=?",[contrasena,correo],(error,resultado)=>{
                        respuesta.redirect("/");
                    });
                }
            });
        });
}
//fin cambiar contraseña

//eliminar usuario
controlador.zonaEliminarUsuario=(consulta,respuesta)=>{
    let correo=consulta.body.correo;
    let contrasena=consulta.body.contrasena;
        consulta.getConnection((error,conexion)=>{
            conexion.query("select * from registro where correo=?", [correo],(error,resultadoConsulta)=>{
                if(error){
                    console.log(error);
                }else{
                    conexion.query("delete registro set contrasena=? and correo=?",[contrasena,correo],(error,resultado)=>{
                        respuesta.redirect("/");
                    });
                }
            });
        });
}



//fin eliminar usuario
module.exports = controlador;