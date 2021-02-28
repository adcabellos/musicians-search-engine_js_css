
document.querySelector("#formulario").addEventListener("submit", function (e) {
    e.preventDefault(); //previene ejecución 


    let results;
    let respuestaIncorrecta = false;


    let userArtistName = document.querySelector("#nombre").value; //nombre del artista lo coge del input ?

    if (userArtistName.includes(" ")) { //sustituimos espacios por barrabaja
        userArtistName = userArtistName.replace(" ", "_");
    }

    axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${userArtistName}`) //llamada a API con variable artista

        .then(function (response) {

            if (response.request.status != 200) {
                respuestaIncorrecta = true;
                alert("¡OOPS! Algo ha fallado. Prueba a hacer la búsqueda de nuevo, o inténtalo de nuevo más tarde")
            }


            else if (response.data.artists == null) {
                respuestaIncorrecta = true;
                alert("No hemos podido localizar a tu artista. Por favor, revisa la ortografía o prueba con otro nombre")
            }

            else if (!userArtistName) {
                respuestaIncorrecta = true;
                alert("¡No te hemos oído! Escribe el nombre de tu artista y haz click en el botón para empezar")
            }

            results = response.data.artists;

        }).then(function () {

            if (respuestaIncorrecta == false) { //solo se ejecutara si no es una respuesta incorrecta

                document.querySelector("#formulario").innerHTML = " "; //quitar formulario
                document.querySelector("#formulario").style.display = "none"; //eliminar formulario

                document.querySelector("#search-results").className = "format-results"; //le asignamos el formato al contenedor 

                let boltIcon = document.createElement("img");
                boltIcon.src = "imagenes/icon-bolt.png";
                boltIcon.className = "logo-bolt-icon-show";

                let boltIcon2 = document.createElement("img");
                boltIcon2.src = "imagenes/icon-bolt.png";
                boltIcon2.className = "logo-bolt-icon-show";

                let boltIcon3 = document.createElement("img");
                boltIcon3.src = "imagenes/icon-bolt.png";
                boltIcon3.className = "logo-bolt-icon-show";

                let boltIcon4 = document.createElement("img");
                boltIcon4.src = "imagenes/icon-bolt.png";
                boltIcon4.className = "logo-bolt-icon-show";

                let heartIcon = document.createElement("img");
                heartIcon.src = "imagenes/heart-icon.png";
                heartIcon.className = "logo-heart-icon-search";



                //artistBanner

                let artistBanner = results[0].strArtistBanner;
                let artistBannerImg = document.createElement("img");
                artistBannerImg.src = artistBanner;
                artistBannerImg.className = "artistbanner-format";

                document.querySelector("#search-results").appendChild(artistBannerImg);

                //mainContentDiv

                let mainContentdiv = createInsertDiv("main-content-div", "#search-results");

                //artistThumb

                let artistThumb = results[0].strArtistThumb;
                let artistThumbImg = document.createElement("img");
                artistThumbImg.src = artistThumb;
                artistThumbImg.className = "artistthumb-format";
                // document.querySelector(".main-content-div").appendChild(artistThumbImg);
                mainContentdiv.appendChild(artistThumbImg);

                //dataDiv

                createInsertDiv ("data-div", ".main-content-div");

                //dataDivArtistaNombre

                let dataDivArtistName = createInsertDiv ("data-div-artist-name", ".data-div");

                //nombreArtista

                let artistName = results[0].strArtist; //cogemos la ruta del nombreArtista
                let artistNameParagraph = document.createElement("p"); //variable de tipo párrafo
                artistNameParagraph.textContent = "NOMBRE: " + artistName;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                artistNameParagraph.className = "artistname-format";
                // document.querySelector(".main-content-div").appendChild(artistNameParagraph) //INSERTAMOS EN CONTENEDOR 
                dataDivArtistName.appendChild(boltIcon3);
                dataDivArtistName.appendChild(artistNameParagraph);

                //dataDivCountry

                let dataDivCountry = createInsertDiv ("data-div-country", ".data-div");

                //Country

                let country = results[0].strCountry; //cogemos la ruta del nombreArtista
                let countryParagraph = document.createElement("p"); //variable de tipo párrafo
                countryParagraph.textContent = "PAÍS: " + country;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                countryParagraph.className = "artistname-format";
                // document.querySelector(".main-content-div").appendChild(artistNameParagraph) //INSERTAMOS EN CONTENEDOR 
                dataDivCountry.appendChild(boltIcon2);
                dataDivCountry.appendChild(countryParagraph);


                //dataDivBiography

                let dataDivBiography = createInsertDiv ("data-div-biography", "#search-results");

                //Biography

                if (results[0].strBiographyES) {

                    let biography = results[0].strBiographyES; //cogemos la ruta del nombreArtista
                    let biographyParagraph = document.createElement("p"); //variable de tipo párrafo
                    biographyParagraph.textContent = "BIO: " + biography;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                    biographyParagraph.className = "artistbio-format";
    
                    dataDivBiography.appendChild(boltIcon);
                    dataDivBiography.appendChild(biographyParagraph);

                } else {
                    let biography = results[0].strBiographyEN; //cogemos la ruta del nombreArtista
                    let biographyParagraph = document.createElement("p"); //variable de tipo párrafo
                    biographyParagraph.textContent = "BIO: " + biography;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                    biographyParagraph.className = "artistbio-format";
    
                    dataDivBiography.appendChild(boltIcon);
                    dataDivBiography.appendChild(biographyParagraph);
                }

                //dataDivWebsite

                let dataDivWebsite = createInsertDiv ("data-div-website", ".data-div");

                //Website

                let website = results[0].strWebsite; //cogemos la ruta del nombreArtista
                let websiteParagraph = document.createElement("p"); //variable de tipo párrafo
                websiteParagraph.textContent = "WEB: " + website;  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                websiteParagraph.className = "artistname-format";

                dataDivWebsite.appendChild(boltIcon4);
                dataDivWebsite.appendChild(websiteParagraph);


                //dataDivFavorites

                let dataDivFavorites = createInsertDiv ("data-div-favorites", ".data-div");

                //Favorites

                let favoritesParagraph = document.createElement("p"); //variable de tipo párrafo
                favoritesParagraph.textContent = "Añadir a favoritos";  //LA RUTA DEL NOMBRE SE LA ASIGNAMOS AL TEXT DEL PARRAFO
                favoritesParagraph.className = "artistname-format";

                dataDivFavorites.appendChild(heartIcon);
                dataDivFavorites.appendChild(favoritesParagraph);

                //LOCAL STORAGE
                let localStg;
                document.querySelector(".data-div-favorites").addEventListener("click", function () {
                    
                    let favoritesObject = { name: artistName, website: website };
                    localStg = cogerDatosLocalStorage("favoritos");
                    if (localStg != null) { //si hay ya algo en localstorage

                        let exists = false; 
                        for (let i=0; i < localStg.length; i++) { //hacemos un bucle for para recorrer mi array favoritos y ver si el objeto que quiero meter está ya en el array

                            if (localStg[i].name == favoritesObject.name) {
                                exists = true; 
                               
                                alert (artistName + " ya se encuentra en tu lista de favoritos");
                            
                            }
                        }
                        if (exists == false) {

                            anyadirLocalStorage(favoritesObject,localStg);
                            alert ("¡Bien! Hemos añadido a " + artistName + " a tu lista de favoritos")
                        } 
                    } else {
                        localStg = [];
                        anyadirLocalStorage(favoritesObject, localStg);
                        alert ("¡Bien! Hemos añadido a " + artistName + " a tu lista de favoritos")
                        
                    }

                });

            }
            // document.querySelector("#favoritos").addEventListener("click", function () {

            //     mostrarDatosLocalStorage ("favoritos");
            // });

           

        })


})













