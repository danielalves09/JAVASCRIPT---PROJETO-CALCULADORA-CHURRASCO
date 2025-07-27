import { calcularBebida } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { obterFormulario, mostrarBebida, mostrarComida, zerarcampos, apresentarResposta } from "./dom.js";
import { formatarMoeda } from "./mascara.js";
import { validacoes, validacoesCampos } from "./validacoes.js";

const informacoesdeEntrada = obterFormulario();


//MAscara monetária
formatarMoeda(informacoesdeEntrada);

//validaç~eos de eventListener
validacoesCampos(informacoesdeEntrada);

function bebida() {
    let valores = {
        quantidadeConvidados: informacoesdeEntrada.convidados.value,
        quantidadePessoasBebemCerveja:
            informacoesdeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesdeEntrada.refri.value,
        valorCerveja: informacoesdeEntrada.cerveja.value,
    };
    let valoresBebidaCalculado = calcularBebida(valores);
    mostrarBebida(valoresBebidaCalculado);
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

    if(validacoes(informacoesdeEntrada)){
        bebida();
        comida();
        zerarcampos(informacoesdeEntrada);
        apresentarResposta();
    }
    

})