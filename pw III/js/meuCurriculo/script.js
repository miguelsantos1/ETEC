
//ESCONDER BOTTÃO
function esconderBotao() {
    document.querySelector("#print").style.display = "none";
    window.print()
}


// PEGANDO DADOS DA URL


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nomeCompleto = urlParams.get('nomeCompleto')
const resumo = urlParams.get('resumo')


const phone = urlParams.get('phone')
const email = urlParams.get('email')


// PEGANDO INFO

const inputNomeCompleto = document.querySelector("#nomeCompleto")
const inputResumo = document.querySelector("#resumo")
const inputPhone = document.querySelector("#phone")
const inputEmail = document.querySelector("#email")


// MOSTRANDO


inputNomeCompleto.innerHTML = nomeCompleto
inputPhone.innerHTML = phone


inputNomeCompleto.innerHTML = nomeCompleto
inputResumo.innerHTML = resumo

