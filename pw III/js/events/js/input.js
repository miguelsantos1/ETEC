const input = document.querySelector("#inputArea").addEventListener('input', changeInput)

function changeInput() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = "Valor do input mudado!"

}