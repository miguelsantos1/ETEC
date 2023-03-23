const click = document.querySelector("#clickArea").addEventListener('click', clicker)

function clicker() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = 'Clicou!'

}