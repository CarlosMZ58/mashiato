const express = require('express')
const rutas = express.Router()
const multer = require('multer')
const cargaImagenes = multer({
    dest: 'src/public/img'
})
const controlador = require('../controladores/controladores')

rutas.get('/',controlador.zonaIndex);



module.exports = rutas
