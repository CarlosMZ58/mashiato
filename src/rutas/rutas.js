const express = require('express')
const rutas = express.Router()
const multer = require('multer')
const cargaImagenes = multer({
    dest: 'src/public/img'
})
const controlador = require('../controladores/controladores')

rutas.get('/',controlador.zonaIndex);
rutas.get('/registro',controlador.zonaRegistro);
rutas.get('/inicio',controlador.zonaInicio);
rutas.get('/origen',controlador.zonaOrigen);
rutas.get('/metodos',controlador.zonaMetodos);
rutas.get('/tipoCafe',controlador.zonaTipoCafe);
rutas.get('/menu',controlador.zonaMenu);
rutas.get('/contactanos',controlador.zonaContactanos);
rutas.get('/cambiarContrasena',controlador.zonaCambiarContrasena);

// post

rutas.post('/registrarUsuario',controlador.zonaRegistroUsuario);
rutas.post('/iniciarSesion',controlador.zonaInicioSesion);
rutas.post('/nuevaContrasena',controlador.zonaNuevaContrasena);

module.exports = rutas
