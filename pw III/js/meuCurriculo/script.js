
//ESCONDER BOTÃO
function esconderBotao() {
    document.querySelector("#print").style.display = "none";
    window.print()

}

function gerarPDF() {
    let element = document.getElementById('main')
    html2pdf(element);
}

const warning = document.querySelector(".warning")
warning.classList.add("no-display")


// PEGANDO DADOS DA URL


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const nomeCompleto = urlParams.get('nomeCompleto')
const cargoDesejado = urlParams.get('cargoDesejado')
const phone = urlParams.get('phone')
const email = urlParams.get('email')
const resumo = urlParams.get('resumo')
const instituicao = urlParams.get('instituicao')
const anoInstituicao = urlParams.get('anoInstituicao')
const habilidades = urlParams.get('habilidades')
const idioma = urlParams.get('idioma')


// PEGANDO INFO

const inputNomeCompleto = document.querySelector("#nomeCompleto")
const inputCargoDesejado = document.querySelector("#cargoDesejado")
const inputPhone = document.querySelector("#phone")
const inputEmail = document.querySelector("#email")
const inputResumo = document.querySelector("#resumo")
const inputAnoInstituicao = document.querySelector("#anoInstituicao")
const inputInstituicao = document.querySelector("#instituicao")
const inputHabilidades = document.querySelector("#habilidades")
const inputIdioma = document.querySelector("#idioma")
const language = document.querySelector(".idioma")


// MOSTRANDO


inputNomeCompleto.innerHTML = nomeCompleto
inputPhone.innerHTML = phone
inputEmail.innerHTML = email
inputResumo.innerHTML = resumo
inputCargoDesejado.innerHTML = cargoDesejado
inputAnoInstituicao.innerHTML = `${anoInstituicao} - `
inputInstituicao.innerHTML = instituicao
inputHabilidades.innerHTML = habilidades

if ( idioma == "semIdioma" ) {
    language.classList.add("no-display")

} else {
    inputIdioma.innerHTML = idioma
}


// VERIFICAÇÃO

const main = document.querySelector("#main")
const print = document.querySelector("#print")




if ( inputNomeCompleto.innerHTML == "" || inputPhone.innerHTML == "" || inputEmail.innerHTML == "" || inputResumo.innerHTML == "" || inputCargoDesejado.innerHTML == "" || inputAnoInstituicao.innerHTML == "" || inputInstituicao.innerHTML == "" || inputHabilidades.innerHTML == "" || inputIdioma.innerHTML == "" ) {

    main.classList.add("no-display")
    print.classList.add("no-display")  
    
    warning.classList.remove("no-display")
    

}




// PDF

