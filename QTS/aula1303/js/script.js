

// PEGANDO DADOS DA URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nome = urlParams.get('nome')
const CPF = urlParams.get('CPF')
const rendimento = urlParams.get('rendimento')

// PEGANDO DADOS PARA MANIPULAÇÃO
const inputNome = document.getElementById("nome")
const inputCPF = document.getElementById("CPF")
const inputRendimento = document.getElementById("rendimento")
const inputAliquota = document.getElementById("aliquota")
const inputImposto = document.getElementById("imposto")

// PORCENTUAL ALIQUOTA

let aliquota;

if ( rendimento <= 22847.76 ) {
    aliquota = 0;
}

else if ( rendimento <= 33919.80 ) {
    aliquota = 7.5
}

else if ( rendimento <= 45012.60 ) {
    aliquota = 15
}

else if ( rendimento <= 55976.16 ) {
    aliquota = 22.5
}

else if ( rendimento > 55976.16 ) {
    aliquota = 27.5
}


const imposto = (aliquota/100)*rendimento;
const resRendimento = Number(rendimento)


// EXIBINDO DADOS
inputNome.textContent = nome
inputCPF.textContent = CPF
inputRendimento.textContent = resRendimento.toFixed(2).replace('.', ',')
inputAliquota.textContent = aliquota
inputImposto.textContent = imposto.toFixed(2).replace('.', ',')

