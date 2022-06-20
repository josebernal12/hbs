const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const rutas = require('./routes/main')
const puerto = 8080
const path = require('path')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({
     extname: '.hbs',
     defaultLayout: path.join(__dirname, './views/layouts/main'),
     layoutsDir: path.join(__dirname, './views/layouts'),
     partialsDir: path.join(__dirname, './views/partials')
}))



app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')

app.use('/', rutas)


app.listen(puerto, () =>{
console.log(`escuchando el puerto ${puerto}`)


})
