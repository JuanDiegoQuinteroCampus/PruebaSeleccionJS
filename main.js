import "./components/my-table.js"

/* import myfunciontabla from"./components/funciontabla.js" */
  



let opciones = document.getElementById("opciones");
let contenido = document.getElementById("contenido");
  opciones.onchange = function() {
    let opcionSeleccionada = opciones.value;
  
    
    switch (opcionSeleccionada) {
      case "form1":
        contenido.innerHTML =`<form  id="formulario"  onsubmit="return false;">
        Ingresa tu ID: <input id="id" name="Id" type="text"><br><br>
        Ingresa tu Nombre: <input id="nombre" name="nombre" type="text"><br><br>
        Ingresa tu edad:<input id="edad" name="edad" type="text"><br><br>
        Ingresa tu teléfono: <input id="telefono" name="teléfono" type="text"><br><br>
        Ingresa tu email: <input id="email" name="email" type="text"><br><br> 
        Ingresa tu dirección: <input id="direccion" name="dirección" type="text"><br><br>
        Ingresa tu fechaDeNacimiento: <input id="born" name="fechaDeNacimiento" type="text"><br><br>
        Ingresa tu numeroDeIdentificación: <input id="NumIdentificacion" name="numeroDeIdentificación" type="text"><br><br>
        Ingresa tu fechaDeIngresoAlPrograma: <input id="Ingreso" name="fechaDeIngresoAlPrograma"  type="text"><br><br>
        Ingresa tu id_team: <input id="id_team" name="id_team" type="text"><br><br>  
        <button id="btn_guardar" onclick="guardar()" class="btn">Guardar</button><br><br>   
        <input type="submit" data-accion="GET" value="Listar">
        <input type="submit" data-accion="POST" value="xd">
        <input type="submit" data-accion="PUT" value="Actualizar">
        <input type="submit" data-accion="DELETE" value="Eliminar">
        <input type="submit" data-accion="SEARCH" value="Buscar">
    </form>`;
        break;
      case "form2":
        contenido.innerHTML = `<form  id="formulario2" onsubmit="return false;">
        Ingresa tu id: <input id="id" name="Id" type="text"><br><br>
        Ingresa tu Nombre: <input id="nombre"  name="nombre" type="text"><br><br>
        Ingresa tu trainer_asociado:<input id="trainer_asociado" name="trainer_asociado" type="text"><br><br> 
        <button id="btn_guardar" onclick="guardar()" class="btn">Guardar</button><br><br>   
    </form>`;
        break;
      case "form3":
        contenido.innerHTML = `<form  id="formulario3" onsubmit="return false;">
        Ingresa tu Id: <input id="id" name="trainer_asociado" type="text"><br><br>
        Ingresa tu Nombre: <input id="nombre"  name="trainer_asociado" type="text"><br><br>
        <button id="btn_guardar" onclick="guardar()" class="btn">Guardar</button><br><br>   
    </form>`;
        break;
        case "form4":
        contenido.innerHTML = `<form  id="formulario4" onsubmit="return false;">
          Ingresa tu Id: <input id="id"  type="text"><br><br>
          Ingresa tu Nombre: <input id="nombre"  type="text"><br><br>
          Ingresa tu id_skill:<input id="id_skill"  type="text"><br><br>  
          <button id="btn_guardar" onclick="guardar()" class="btn">Guardar</button><br><br>   
          </form>`;
          break;
        case "form5":
          contenido.innerHTML = `<form  id="formulario5" onsubmit="return false;">
            Ingresa tu Id_recluta: <input id="Id_recluta"  type="text"><br><br>
            Ingresa tu id_modulo:<input id="id_modulo"  type="text"><br><br>
            Ingresa tu nota: <input id="nota"  type="text"><br><br>
            <button id="btn_guardar" onclick="guardar()" class="btn">Guardar</button><br><br>   
        </form>`;
            break;
      default:
        contenido.innerHTML = "";
    }
  };


  
  
  
  /* let myForm = document.querySelector("#formulario");
  myForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.target));
      opc[e.submitter.dataset.accion](data)    
  })
  
  const opc = {
      "GET": () => getUserAll(),
      "PUT": (data) => putUser(data),
      "DELETE": (data) => deleteUser(data),
      "SEARCH": (data) => searchUser(data),
      "POST": (data) => postUser(data)
  }
  
  let config = {
      headers:new Headers({
          "Content-Type": "application/json"
      }), 
  };
  const getUserAll = async()=>{
      config.method = "GET";
      let res = await ( await fetch("http://localhost:4008/reclutas",config)).json();
      console.log(res);
  }
  const postUser = async(data)=>{
      config.method = "POST";
      config.body = JSON.stringify(data);
      let res = await ( await fetch("http://localhost:4008/reclutas",config)).json();
      console.log(res);
  }
  const putUser = async(data)=>{
      config.method = "PUT";
      config.body = JSON.stringify(data);
      let res = await ( await fetch(`http://localhost:4008/reclutas`,config)).json();
      console.log(res);
  }
  const deleteUser = async(data)=>{
      config.method = "DELETE";
      let res = await ( await fetch(`http://localhost:4008/reclutas/${data.id}`,config)).json();
      console.log(res);
  }
  const searchUser = async(data)=>{
      config.method = "GET";
      let res = await ( await fetch(`http://localhost:4008/reclutas?q=${Object.values(data).join("")}`,config)).json();
      console.log(res);
  } */