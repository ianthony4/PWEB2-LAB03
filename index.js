//Paquetes necesarios para este proyecto
//npm install body-parser
//npm install markdown-it --save
//npm install express
const fs = require('fs') //Esto ayudara a listar directorios
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//Markdown (Traducir Archivo)
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt(); //Servira para traducir MD a HTML
const app = express()

app.use(express.static('pub'))

app.listen(3000, () => {
    console.log("Escuchando en http://localhost:3000")
})

//Body Parser nos ayudara a acceder al contenido del cuerpo en cada peticion
//utilizamos body-parser
//https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
app.use(bodyParser.json()) //le decimos al sistema que usaremos JSON
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});

//Responder a la peticion para guardar archivos
app.post('/guardar',(request,response) => {
        let elTitulo = request.body.titulo + ".md"; //Extraemos del JSON el titulo
        let elContenido = request.body.contenido; //Extraemo del JSON el contenido
    
    //Creamos un archivo y le asignamos un titulo y contenido correspondiente
    fs.writeFile(path.resolve(__dirname,'private/',elTitulo), elContenido, function(err){
        if(err){ 
            //En caso de error, mostrara la razon
            console.log("No se logro crear un archivo : ");
            console.log(err);
            return
        }
        //Mensaje de aprobacion
        console.log("Guardado Satisfactoriamente");
    });
})

//LISTAR DIRECTORIO

//lee el contenido del directorio
//Los archivos se almacenan en un arreglo llamado 'archivos'
app.get('/listando', (request, response) => {
    fs.readdir(path.resolve(__dirname,"private"), (error, archivos) =>{
        //En caso de error mostrara un mensaje en la consola
        if(error){
            console.error("Error al leer el directorio", error);
            return;
        }
        //Enviando los archivos como respuesta al cliente
        //Convirtiendo los archivos en una cadena JSON
        response.json(archivos);
    });
})

//Ya podemos CREAR, ahora debemos LEER estos archivos
app.post("/leer",(request, response)=> {

})



