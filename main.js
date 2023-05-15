import "./components/my-table.js";
import "./components/my-reclutas.js";
import "./components/my-skill.js";
import "./components/my-team.js";
import "./components/my-moduleskill.js";
import "./components/my-evaluacion.js";

/* import myfunciontabla from"./components/funciontabla.js" */
  



let opciones = document.getElementById("opciones");
let contenido = document.getElementById("contenido");
  opciones.onchange = function() {
    let opcionSeleccionada = opciones.value;
      

    switch (opcionSeleccionada) {
      case "form1":
        contenido.innerHTML =`<my-reclutas></my-reclutas>`;
        break;
      case "form2":
        contenido.innerHTML = `<my-team></my-team>  `;
        break;
      case "form3":
        contenido.innerHTML = `<my-skill></my-skill> `;
        break;
        case "form4":
        contenido.innerHTML = `<my-moduleskill></my-moduleskill>`;
          break;
        case "form5":
          contenido.innerHTML = `<my-evaluacion></my-evaluacion>`;
            break;
      default:
        contenido.innerHTML = ``;
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