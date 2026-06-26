import "./componentes/Tabela.js";
import "./componentes/quadrado.js";

import { CampoMinado } from "./logica/jogo.js";

const jogo = new CampoMinado(10, 10);

jogo.implementarMinas(20);

const tabela = document.querySelector("layout-campo");

tabela.iniciar(jogo);

console.log(jogo);