import { calcularBebida } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { obterFormulario, mostrarBebida, mostrarComida } from "./dom.js";

const informacoesdeEntrada = obterFormulario();



function bebida(){
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value,
        quantidadePessoasBebemCerveja: informacoesdeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesdeEntrada.refri.value,
        valorCerveja: informacoesdeEntrada.cerveja.value,
    };

        let valoresBebidaCalculado = calcularBebida(valores);
        mostrarBebida(valoresBebidaCalculado)
}

function comida(){
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value,
        valorBovina: informacoesdeEntrada.bovina.value,
        valorFrango: informacoesdeEntrada.frango.value,
        valorSuina: informacoesdeEntrada.suina.value,

    };
    
    let valoresComidaCalculado = calcularComida(valores);

    mostrarComida(valoresComidaCalculado);


}


informacoesdeEntrada.addEventListener('submit', (event) => {
    event.preventDefault();

    //bebida();
    comida();

})