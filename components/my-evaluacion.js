let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myevaluacion extends HTMLElement{
    static async components(){
        return await(await fetch(pathName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myevaluacion.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
        })
        console.log("Funciona team");
    }
}
customElements.define(name, myevaluacion)