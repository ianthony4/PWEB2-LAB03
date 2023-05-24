//Paquetes necesarios para este proyecto
//npm install body-parser
//npm install markdown-it --save
//npm install express
const fs = require('fs') //Esto ayudara a listar directorios
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('pub'))

app.listen(3000, () => {
    console.log("Escuchando en http://localhost:3000")
}); 
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});

//LISTAR DIRECTORIO
const directorio = "./private";
//lee el contenido del directorio
//Los archivos se almacenan en un arreglo llamado 'archivos'
app.get('/listando', (request, response) => {
    fs.readdir(directorio, (error, archivos) =>{
        //En caso de error mostrara un mensaje en la consola
        if(error){
            console.error("Error al leer el directorio", error);
            return;
        }
        //Recorriendo el directorio para listar los archivos
        //Enviando los archivos como respuesta al cliente
        //Convirtiendo los archivos en una cadena JSON
        response.json(archivos);
    });
});

