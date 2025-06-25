  //Cuando se produce el evento en el formulario de busqueda iniciamos nuestro algoritmo
  document.querySelector("#formBusqueda").addEventListener("submit", function (event) {
    event.preventDefault(); //Evitamos que el navegador envie el formulario y recargue la paguina que es lo que se hace por defecto

    //obtengo el nombre del libro lo dejo todo en minusculas lowerCase y elimino espacios al principio y final del texto trim
    const termino = document
      .querySelector("#BuscarLibro")
      .value.toLowerCase()
      .trim();

    //obtengo todos los libros que estan en la clase libro
    const libros = document.querySelectorAll(".libro");

    if (termino === "") {
      //En caso que el campo del libro a buscar este vacio muestro todos los libros
      libros.forEach((libro) => (libro.style.display = "block")); //uso la propiedad display block para mostrar todos los div de la clase libro
      return;
    }

    //Recorro todos los div de la clase libro que se obtuvieron anteriormente
    libros.forEach((libro) => {
      const titulo = libro.querySelector("h3").textContent.toLowerCase().trim(); //otengo del h3 de libro el titulo de este 
      const autor = libro.dataset.autor.toLowerCase().trim(); //obtengo de el data el autor
      const genero = libro.dataset.genero.toLowerCase().trim(); //obtengo del data el genero esto para hacer mas simple la busqueda

      //uso la funcion include de javascript y en caso que la sucadena se encuentra o sea devuelve true
      const contieneTermino =titulo.includes(termino) ||autor.includes(termino) || genero.includes(termino);

      //En caso que encuentra el termino en ese libro lo muestra si no oculta el div
      if (contieneTermino) {
        libro.style.display = "block";
      } else {
        libro.style.display = "none";
      }

    });

    document.querySelector("#BuscarLibro").value = "";//limpia el buscador
  });
