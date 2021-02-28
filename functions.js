function anadirElementoaArray (array, element) {
    array.push (element);
    return array;
}

// PARAM: clave del storage
// RETURN: Array de artistas favoritos
function cogerDatosLocalStorage (clave) {
    let datosLocalStorage = localStorage.getItem(clave);
    datosLocalStorage = JSON.parse(datosLocalStorage); //hacemos JSON parse para pasar el string a objeto 
    return datosLocalStorage;
}

function mostrarDatosLocalStorage (clave){

    document.querySelector("#favoritos-container").className = "favoritos-container-results"; //le asignamos el formato al contenedor 


    for (let i=0; i<cogerDatosLocalStorage(clave).length; i++) {
   

        let favoritesName = cogerDatosLocalStorage(clave)[i].name; //cogemos la ruta del nombreArtista
        let favoritesNameParagraph = document.createElement("a"); //variable de tipo párrafo
        favoritesNameParagraph.textContent = '- ' + favoritesName;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
        favoritesNameParagraph.href = 'http://' + cogerDatosLocalStorage(clave)[i].website;
        favoritesNameParagraph.target = '_blank';
        favoritesNameParagraph.className = "artistname-favorites-format";
        document.querySelector("#favoritos-container").appendChild(favoritesNameParagraph);

    }
}


// PARAM: clave del storage + valor a añadir
// RETURN: --
function anyadirLocalStorage (valor, arrayLocalStorage) {

    arrayLocalStorage = anadirElementoaArray(arrayLocalStorage, valor);
    arrayLocalStorage = JSON.stringify(arrayLocalStorage);

    localStorage.setItem("favoritos", arrayLocalStorage);
}


function createInsertDiv (classDiv, placeToInsert) {
    let div = document.createElement("div");
    div.className = classDiv;
    document.querySelector (placeToInsert).appendChild(div);
    return div;
}



