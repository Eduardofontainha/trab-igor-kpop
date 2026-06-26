export default class Tabela extends HTMLElement {

    constructor() {
        super();

        this.jogo = null;

        const shadow = this.attachShadow({ mode: "open" });

        const estilo = document.createElement("style");

        estilo.textContent = `
        :host {
            display: grid;
            grid-template-columns: repeat(10, 50px);
            gap: 2px;
        }
        `;

        shadow.appendChild(estilo);
    }

    iniciar(jogo) {
        this.jogo = jogo;
        this.render();
    }

    render() {

        const shadow = this.shadowRoot;
        shadow.innerHTML += "";

        const tabuleiro = this.jogo.pegarTabuleiro();

        tabuleiro.forEach((linha, i) => {
            linha.forEach((casa, j) => {

                const quadrado = document.createElement("campo-quadrado");

                quadrado.setAttribute("linha", i);
                quadrado.setAttribute("coluna", j);

                if (casa.mina) {
                    quadrado.setAttribute("mina", "true");
                }

                shadow.appendChild(quadrado);
            });
        });

    }

    connectedCallback() {

        this.addEventListener("clicou", (e) => {

            const { linha, coluna } = e.detail;

            const resultado = this.jogo.cliqueMinas(linha, coluna);

            console.log("Resultado:", resultado);

        });

    }
}

customElements.define("layout-campo", Tabela);