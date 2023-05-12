import "./components/my-table.js"

import myfunciontabla from"./components/funciontabla.js"
  
myfunciontabla.guardar()


let opciones = document.getElementById("opciones");
let contenido = document.getElementById("contenido");
  opciones.onchange = function() {
    let opcionSeleccionada = opciones.value;
  
    
    switch (opcionSeleccionada) {
      case "opcion1":
        contenido.innerHTML = "<p>Contenido de la opción 1</p>";
        break;
      case "opcion2":
        contenido.innerHTML = "<p>Contenido de la opción 2</p>";
        break;
      case "opcion3":
        contenido.innerHTML = "<p>Contenido de la opción 3</p>";
        break;
      default:
        contenido.innerHTML = "<p>Contenido por defecto</p>";
    }
  };