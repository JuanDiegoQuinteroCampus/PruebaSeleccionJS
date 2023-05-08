let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class mytable extends HTMLElement{
    static async components(){
        return await(await fetch(pathName.replace(".js",".html"))).text();
    };
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mytable.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
        })
        console.log("Funciona x4");
    };
};
customElements.define(name, mytable)

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
