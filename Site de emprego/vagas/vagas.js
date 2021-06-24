function detalharVaga(vaga, horario, contrato, nivel, faixa){
    implementarEspecificacoes(vaga, "Horário", horario);
    implementarEspecificacoes(vaga, "Contrato", contrato);
    implementarEspecificacoes(vaga, "Nível profissional", nivel);
    implementarEspecificacoes(vaga, "Faixa salarial", faixa);
}

function implementarEspecificacoes(vaga, tituloEspecificacao, especificacao){
    var tag = document.createElement("h4");
    var texto = document.createTextNode(tituloEspecificacao);
    tag.appendChild(texto);
    var elemento = document.getElementById(vaga);
    tag.style.color = "dodgerblue";
    tag.style.paddingLeft = "10px";
    elemento.appendChild(tag);
    tag = document.createElement("p");
    texto = document.createTextNode(especificacao);
    tag.appendChild(texto);
    elemento = document.getElementById(vaga);
    tag.style.paddingLeft = "10px";
    elemento.appendChild(tag);
}

function mostrarValor(valor){
    document.getElementById('valor').innerHTML = valor;
}

function enviar(vaga){
    document.getElementById(vaga).getElementsByClassName('enviar')[0].getElementsByTagName('p')[0].innerHTML = "Currículo enviado com sucesso";
    document.getElementById(vaga).getElementsByClassName('enviar')[0].getElementsByTagName('p')[0].style.color = "green";
}