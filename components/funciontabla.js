export default {
     guardar(){
        let form = document.querySelector("#formulario");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
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
      });
}
}
