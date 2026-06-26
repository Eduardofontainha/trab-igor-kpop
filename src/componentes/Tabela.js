import Quadrado from "./quadrado.js";

export default class Tabela extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        let linhas = 10;
        let colunas = 10;

        const estilo = document.createElement("style");

        estilo.textContent = `

        :host{

            display:grid;

            grid-template-columns:repeat(${colunas},50px);

            gap:2px;

        }

        `;

        shadow.appendChild(estilo);

    }
        mostrarJogo(tabuleiro) {
            const shadow = this.shadowRoot;

            tabuleiro.forEach((linha) => {
                linha.forEach((casa) => {
                    const quadrado = document.createElement("campo-quadrado");

                    if (casa.mina) {
                        quadrado.setAttribute("mina", "true");
                    }

                    shadow.appendChild(quadrado);
                });
            });
        }
}

customElements.define("layout-campo", Tabela);
