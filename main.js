const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarDato);
function agregarDato(event) {
    event.preventDefault(); // Previene que se recargue la página
    
    // Obtiene los valores ingresados ​​en el formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const born = document.getElementById("born").value;
    const NumIdentificacion = document.getElementById("NumIdentificacion").value;
    const Ingreso = document.getElementById("Ingreso").value;
    const idTeam = document.getElementById("id_team").value;
    
    
    /* // Crea una nueva fila en la tabla con los datos ingresados
    const nuevaFila = `
      <tr>
        <td>
          <p>${nombre} </p>
        </td>
      </tr>
    `;

    if (option === 'Ingresos') {
        const tablaDatos = document.getElementById("tabla-datos");
        tablaDatos.insertAdjacentHTML("beforeend", nuevaFila);

   */

        
    // Limpia los valores del formulario
    document.getElementById("selectOption").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("userInput").value = "";
  }
  
  


