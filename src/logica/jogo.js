export class CampoMinado {
    constructor(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.minas = [];
        this.tabuleiro = [];
        this.revelado = [];
        this.criarTabuleiro();
    }

    criarTabuleiro() {
        for (let i = 0; i < this.linhas; i++) {
            this.tabuleiro[i] = [];

            for (let j = 0; j < this.colunas; j++) {
                this.tabuleiro[i][j] = {
                    mina: false,
                    revelado: false,
                };
            }
        }
    }

    implementarMinas(quantidade) {
        while (this.minas.length < quantidade) {
            let linha = Math.floor(Math.random() * this.linhas);
            let coluna = Math.floor(Math.random() * this.colunas);

            if (!this.tabuleiro[linha][coluna].mina) {
                this.tabuleiro[linha][coluna].mina = true;

                this.minas.push({
                    linha,
                    coluna,
                });
            }
        }
    }

    cliqueMinas(linha, coluna) {
        const quadrado = this.tabuleiro[linha][coluna];

        if (quadrado.mina) {
            return "perdeu";
        }

        return "continuar";
    }
    quadradoRevelado(linha, coluna) {
        const quadrado = this.tabuleiro[linha][coluna];
        this.tabuleiro[linha][coluna].revelado = true;

        this.revelado.push({
            linha,
            coluna,
        });
        return quadrado.revelado;
    }

    pegarTabuleiro(){

        return this.tabuleiro;

    }
    regrasDeJogo() {
        let quadradosRevelados=0;

        
        // contar quadrados revelados
        for (let i = 0; i < this.linhas; i++) {
            for (let j = 0; j < this.colunas; j++) {
                if(this.tabuleiro[i][j].revelado == true) quadradosRevelados++;
            }
        }
        // etc
    }
}

