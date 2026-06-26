export default class Quadrado extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const estilo = document.createElement("style");

    estilo.textContent = `
    div{
        width:50px;
        height:50px;
        background:red;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
    }`;

    const quadrado = document.createElement("div");

    quadrado.textContent = "";

    quadrado.addEventListener("click", () => {
        
      quadrado.textContent = "0";
    });

    shadow.appendChild(estilo);

    shadow.appendChild(quadrado);
  }
}

customElements.define("campo-quadrado", Quadrado);
