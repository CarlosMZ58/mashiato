const express = require('express')
const rutas = express.Router()
const multer = require('multer')
const cargaImagenes = multer({
    dest: 'src/public/img'
})
const controlador = require('../controladores/controladores')

rutas.get('/',controlador.zonaIndex);
rutas.get('/inicio',controlador.zonaInicio);



module.exports = rutas
