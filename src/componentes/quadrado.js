export default class Quadrado extends HTMLElement {
  #estado = {
    linha: null,
    coluna: null,
    mina: false,
    revelado: false,
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
      </style>

      <div></div>
    `;

    const div = shadow.querySelector("div");

    div.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("clicou", {
          detail: {
            linha: this.#estado.linha,
            coluna: this.#estado.coluna,
          },
          bubbles: true,
        }),
      );
    });

    if (this.#estado.mina) {
      div.classList.add("mina");
    }
  }
}

customElements.define("campo-quadrado", Quadrado);
