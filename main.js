const formulario = document.getElementById("formulario");

function agregarDato(event) {
    event.preventDefault(); // Previene que se recargue la página
    
    // Obtiene los valores ingresados ​​en el formulario
    
    
    // Crea una nueva fila en la tabla con los datos ingresados
    const nuevaFila = `
      <tr>
        <td>
          <p>${nombre} </p>
        </td>
        <td>
          <p>${edad} </p>
        </td>
        <td>
          <p>${telefono} </p>
        </td>
        <td>
          <p>${email} </p>
        </td>
        <td>
          <p>${direccion} </p>
        </td>
        <td>
          <p>${born} </p>
        </td>
        <td>
          <p>${NumIdentificacion} </p>
        </td>
        <td>
          <p>${Ingreso} </p>
        </td>
        <td>
          <p>${idTeam} </p>
        </td>
      </tr>
    `;

    
        const tablaDatos = document.getElementById("tabla-datos");
        tablaDatos.insertAdjacentHTML("beforeend", nuevaFila);

  
}
  
  
  function guardar(){
   
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let born = document.getElementById("born").value;
    let NumIdentificacion = document.getElementById("NumIdentificacion").value;
    let Ingreso = document.getElementById("Ingreso").value;
    let idTeam = document.getElementById("id_team").value;
    

    

    let fila="<tr><td>"+nombre+"</td><td>"+edad +"</td><td>"+telefono +"</td><td>"+email+"</td><td>"+direccion +"</td><td>"+born +"</td><td>"+NumIdentificacion+"</td><td>"+Ingreso +"</td><td>"+idTeam +"</td></tr>";

    let btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}

