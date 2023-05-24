//Lado del cliente
//Creando la funcion
function crearNuevoArchivo(){
    let remplazo = `<h4>Titulo</h4>
                    <input type="text" id="textTitle" size="50"><br><br>
                    <h4>Ingrese Contenido Markdown</h4>
                    <textarea type="verTexto" rows="30" cols="80"></textarea><br>
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
            lista += `<li>`+x[i].substring(0,x[i].length-3)+`</li>`;
        }
    }
    lista += `</ul><br>`;
    //retornando
    return lista;
}

//Añadiendo EVENTO para que se muestre la lista
document.addEventListener("DOMContentLoaded",listando());
//Segunda funcion para almacenar archivo nuevo

