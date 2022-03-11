//exemplo de spread operator
function cadastroPessoa(info){
    let novosDados =
    {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: 'qualquer'
    };

    return novosDados;

}

//rest operator
function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Matheus", "Lucas", "Joao", "Maria");
/*var dados = cadastroPessoa({nome: 'Matheus', sobrenome: 'Fraga', anoInicio: 2045});
document.write(dados.nome);*/