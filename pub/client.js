//Lado del cliente
//Creando la funcion
function crearNuevoArchivo(){
    let remplazo = `<h4>Titulo</h4>
                    <input type="text" id="elTitulo" size="50"><br><br>
                    <h4>Ingrese Contenido Markdown</h4>
                    <textarea type="text" id="elTexto" rows="30" cols="80"></textarea><br>
                    <input type="button" id="almacenarArchivo" value="Creando Archivo" onclick="almacenarArchivoNuevo()">`;
    document.getElementById("s2").innerHTML = remplazo;
}
//Listar Archivos
//Esta funcion pedira al servidor la lista de archivos
function listando(){
    //en esta direccion sacaremos la informacion
    const url = "http://localhost:3000/listando";
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            //Aqui vamos a recorrer los archivos que estan almacenados en "data"
            document.getElementById("s1").innerHTML = listar(data);
        }
    );
}
//Funcion para recorrer el arreglo y listarlo
function listar(x){
    let lista = `<ul><br>`;
    for(let i=0;i<x.length;i++){
        //Mostrar solo archivos MD
        if(x[i].substring(x[i].length -2,x[i].length)=="md"){
            //Mostrar archivos sin el ".md", debido a que aseguramos mostrar solo .MD
            //Para poder abrir, los archivos añadimos un evento
            let nombreArchivo = x[i].substring(0,x[i].length-3);
            lista += `<li onclick="mostrarArchivo('${nombreArchivo}')">`+nombreArchivo+`</li>`;
        }
    }
    lista += `</ul><br>`;
    //retornando
    return lista;
}

//Añadiendo EVENTO para que se muestre la lista
document.addEventListener("DOMContentLoaded",listando());


//Funcion que creara el archivo Nuevo 
//Usa la primera funcion de CrearNuevoArchivo()
function almacenarArchivoNuevo(){
    const nombreArchivo = document.getElementById("elTitulo").value;
    const contenidoArchivo = document.getElementById("elTexto").value;
    const url = "http://localhost:3000/guardar";
    const data = {//Almacenmos los valores del titulo y contenido
        titulo: nombreArchivo,
        contenido: contenidoArchivo,
    }
    const request = { //Objeto que mandaremos al servidor
        method : "POST", //Tipo de metodo : POST
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data), //Convertimos en objeto de tipo JSON
    }
    fetch(url, request);
    let html = '<textarea type="text" id="elTexto" rows="30" cols="80" disable></textarea><br>';
    document.getElementById("s2").innerHTML = html; //Mostramos area de texto para observar el texto
    listando(); //Actualizamos la lista
}

//Funcion que me mostrara (LEER) el archivo al hacerle click 
function mostrarArchivo(archivo){
    let elTitulo = archivo;
    const url = "http://localhost:3000/leer";
    const data = {
        //Almacenmos el titulo
        titulo : elTitulo,
    }
    const request = { //Objeto para el server
        method : "POST", //metodo
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data), //Convertimos el objeto en JSON (Serializamos)
    }
    fetch(url, request).then(response => response.json())
    .then(data => {
        
    })

}