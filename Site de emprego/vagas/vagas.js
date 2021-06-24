function detalharVaga(vaga, empresa, horario, contrato, nivel, faixa){

    function implementarImagemDaEmpresa(vaga, empresa) {
        var img = document.createElement("img");
        if (empresa == 'FeiraLivre.net'){
            img.src = "feiralivre.png";
        }else if(empresa == 'FulanoBeltrano SA') {
            img.src = "fulanobeltrano.png";
        }else if(empresa == 'Lobo Investimentos'){
            img.src = "lobo.png"
        }else if(empresa == 'PagAssegurado corp.'){
            img.src = "banco.png";
        }else if(empresa == 'Umbrella Ltda.'){
            img.src = "umbrella.png";
        }else if(empresa == 'Orange Inc'){
            img.src = "orange.jpg";
        }else if(empresa == 'Drogas Tubarão'){
            img.src = "farmacia.png";
        }else {
            img.src = "confidential.png";
        }
        img.style.paddingLeft = '10px';
        img.style.width = '60px';
        img.style.height = '60px';
        var elemento = document.getElementById(vaga);
        elemento.appendChild(img);
    }
    function implementarEspecificacoes(vaga, tituloEspecificacao, especificacao){
        var tag = document.createElement("h4");
        var texto = document.createTextNode(tituloEspecificacao);
        tag.appendChild(texto);
        var elemento = document.getElementById(vaga);
        tag.style.color = "dodgerblue";
        tag.style.paddingLeft = "10px";
        elemento.appendChild(tag);
        if (tituloEspecificacao == "Empresa"){
            implementarImagemDaEmpresa(vaga, empresa);
        }
        tag = document.createElement("p");
        texto = document.createTextNode(especificacao);
        tag.appendChild(texto);
        elemento = document.getElementById(vaga);
        tag.style.paddingLeft = "10px";
        elemento.appendChild(tag);
    }
    implementarEspecificacoes(vaga, "Empresa", empresa);
    implementarEspecificacoes(vaga, "Horário", horario);
    implementarEspecificacoes(vaga, "Contrato", contrato);
    implementarEspecificacoes(vaga, "Nível profissional", nivel);
    implementarEspecificacoes(vaga, "Salário", faixa);
}



function mostrarValor(valor){
    document.getElementById('valor').innerHTML = valor;
}

function enviar(vaga){
    document.getElementById(vaga).getElementsByClassName('botoes')[0].getElementsByTagName('p')[0].innerHTML = "Currículo enviado com sucesso";
    document.getElementById(vaga).getElementsByClassName('botoes')[0].getElementsByTagName('p')[0].style.color = "green";
}

function abrirSiteDaVaga(){
    var conf = confirm("Você abrirá um site externo ao JobFinder, deseja prosseguir?");
    if(conf){
        window.open("https://www.faeterj-rio.edu.br");
    }
}