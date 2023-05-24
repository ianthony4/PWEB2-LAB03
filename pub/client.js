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
function listarArchivos(){
    //en esta direccion sacaremos la informacion
    const url = "http://localhost:3000/listando";
    fetch(url).then(
        response => response.json()
    ).then(
        //Aqui vamos a recorrer los archivos que estan almacenados en "data"
        document.getElementById("s1").innerHTML = ""
    );
}
//Segunda funcion para almacenar archivo nuevo

