const input = document.querySelector("#inputArea").addEventListener('keyup', keyUp)

function keyUp() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = "Soltou a tecla!"

}