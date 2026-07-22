export default class Quadrado extends HTMLElement {
  #estado = {
    linha: null,
    coluna: null,
    mina: false,
    revelado: false,
    minasVizinhas: 0
  };

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["linha", "coluna", "mina"];
  }

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "mina") {
      this.#estado.mina = newValue === "true";
    }

    if (name === "linha") {
      this.#estado.linha = Number(newValue);
    }

    if (name === "coluna") {
      this.#estado.coluna = Number(newValue);
    }
  }

  #render() {
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
      <style>
        div{
          width:50px;
          height:50px;
          background:red;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
        }

        .mina{
          background:black;
        }
        .revelado{
          background:gray;
        }
      </style>

      <div></div>
    `;

    const div = shadow.querySelector("div");

    div.addEventListener("click", () => {
      this.#estado.revelado = true;
      if(this.#estado.revelado){
        div.classList.add("revelado");
      }
      console.log("Quadrado revelado:", this.#estado);
      this.dispatchEvent(
        new CustomEvent("clicou", {
          detail: {
            linha: this.#estado.linha,
            coluna: this.#estado.coluna,
          },
          bubbles: true,
          composed: true//propriedade que permite que o evento atravesse o shadow DOM e seja capturado pelo elemento pai
        }),
        
      );
    });

    if (this.#estado.mina) {
      div.classList.add("mina");
    }

    
    
  }
}

customElements.define("campo-quadrado", Quadrado);
