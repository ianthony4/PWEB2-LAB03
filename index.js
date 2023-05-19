//Paquetes necesarios para este proyecto
//npm install body-parser
//npm install markdown-it --save
//npm install express
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('pub'))

app.listen(3000, () => {
    console.log("Escuchando en http://localhost:3000")
});
     
