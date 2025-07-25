import { calcularBebida } from "./bebidas.js";
import { obterFormulario } from "./dom.js";

const informacoesdeEntrada = obterFormulario();



function bebida(){
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value,
        quantidadePessoasBebemCerveja: informacoesdeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesdeEntrada.refri.value,
        valorCerveja: informacoesdeEntrada.cerveja.value
    }

        console.log(calcularBebida(valores))
}


informacoesdeEntrada.addEventListener('submit', (event) => {
    event.preventDefault();

    bebida();


})