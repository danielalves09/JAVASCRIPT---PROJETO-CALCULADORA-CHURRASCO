import { calcularBebida } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { obterFormulario, mostrarBebida } from "./dom.js";

const informacoesdeEntrada = obterFormulario();



function bebida(){
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value,
        quantidadePessoasBebemCerveja: informacoesdeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesdeEntrada.refri.value,
        valorCerveja: informacoesdeEntrada.cerveja.value
    }

        let valoresBebidaCalculado = calcularBebida(valores);
        mostrarBebida(valoresBebidaCalculado)
}

function comida(){
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value

    }
    console.log(calcularComida(valores))


}


informacoesdeEntrada.addEventListener('submit', (event) => {
    event.preventDefault();

    //bebida();
    comida();

})