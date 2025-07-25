import { obterFormulario } from "./dom.js";

const informacoesdeEntrada = obterFormulario();



function bebida(){
    

}


informacoesdeEntrada.addEventListener('submit', (event) => {
    event.preventDefault();

    bebida();


})