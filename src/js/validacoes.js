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

export { validacoes };