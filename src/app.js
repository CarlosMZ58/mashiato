const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql2')
const myconnection = require('express-myconnection')
const rutas = require('./rutas/rutas')

app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'))

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Masshiato23',
    port: 3306,
    database: 'masshiato'
}, 'single'))

app.use(express.urlencoded({
    extended: false
}))


app.use('/',rutas)


app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto 4000")
})