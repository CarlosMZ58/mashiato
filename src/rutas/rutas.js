const express = require('express')
const rutas = express.Router()
const multer = require('multer')
const cargaImagenes = multer({
    dest: 'src/public/img'
})
const controlador = require('../controladores/controladores')

rutas.get('/',controlador.zonaIndex);
rutas.get('/Horizonte', controlador.zonaQuienes);
rutas.get('/registro',controlador.zonaRegistro);
rutas.get('/inicio',controlador.zonaInicio);
rutas.get('/origen',controlador.zonaOrigen);
rutas.get('/metodos',controlador.zonaMetodos);
rutas.get('/tipoCafe',controlador.zonaTipoCafe);
rutas.get('/menu',controlador.zonaMenu);
rutas.get('/contactanos',controlador.zonaContactanos);
rutas.get('/cambiarContrasena',controlador.zonaCambiarContrasena);
rutas.get('/eliminarUsuario',controlador.zonaEliminaUsuario);
rutas.get('/tiposCafe',controlador.zonaTiposCafe);

// post

rutas.post('/registrarUsuario',controlador.zonaRegistroUsuario);
rutas.post('/iniciarSesion',controlador.zonaInicioSesion);
rutas.post('/nuevaContrasena',controlador.zonaNuevaContrasena);
rutas.post('/eliminarUsuario',controlador.zonaEliminarUsuario)

module.exports = rutas
