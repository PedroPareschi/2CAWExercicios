function cadastrar(){
    document.getElementById('sucesso').innerHTML = "Cadastro realizado com sucesso"
}

function habilitarBotao(){
    if(checarSeEstaVazio('nome') || checarSeEstaVazio('email') || checarSeEstaVazio('celular') || checarSeEstaVazio('email') || checarSeEstaVazio('sexo') || checarSeEstaVazio('cep') || checarSeEstaVazio('rua') || checarSeEstaVazio('numero') || checarSeEstaVazio('estado') || checarSeEstaVazio('cidade')){
        document.getElementById('enviar').disabled = true;
        document.getElementById('enviar').style.backgroundColor = "gray";
    } else{
        document.getElementById('enviar').disabled = false;
        document.getElementById('enviar').style.backgroundColor = "dodgerBlue";

    }
}

function checarSeEstaVazio(campo){
    return document.getElementById(campo).value.length === 0;
}
