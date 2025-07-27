
//validações de Alerta
function validacoes(informacoesdeEntrada){
    let valorCerveja = informacoesdeEntrada.cerveja.value;
    let quantidadePessoasBebemCerveja = informacoesdeEntrada.quantidadePessoasBebemCerveja.value;

    if(verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) && verificarValorPessoa(valorCerveja, quantidadePessoasBebemCerveja))
    {
        return true;
    }
    return false;


}

function verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja){

    if(quantidadePessoasBebemCerveja != '' && valorCerveja == ''){
        alert('É necessário informar o valor da cerveja');
        
        return false

    }
    return true

}

function verificarValorPessoa(valorCerveja, quantidadePessoasBebemCerveja){

        if(valorCerveja != '' && quantidadePessoasBebemCerveja == ''){
            alert('É necessário informar quantiade de pessoas que bebem cerveja')
            return false;
        }
        return true;
}

//validações de campos

function validacoesCampos(informacoesdeEntrada){
     verificarNumeroDePessoasBebem(informacoesdeEntrada.quantidadePessoasBebemCerveja, informacoesdeEntrada.convidados);
    
     verificarQuantidadeConvidados(informacoesdeEntrada.convidados);
}

function verificarNumeroDePessoasBebem(pessoasBebem, convidados){
    pessoasBebem.addEventListener('input',() =>{
        if(parseInt(pessoasBebem.value) > parseInt(convidados.value)){

            pessoasBebem.setCustomValidity("O numero de pessoas que bebem precisa ser menor que a quantidade de convidados");
            
              return
        }
        pessoasBebem.setCustomValidity('');
    });

}


function verificarQuantidadeConvidados(convidados){
    convidados.addEventListener('input', () => {
        if(parseInt(convidados.value) < 2){
            convidados.setCustomValidity("Informe mais de um convidado");
            return;
        }
         convidados.setCustomValidity("");

    });
}
export { validacoes , validacoesCampos};