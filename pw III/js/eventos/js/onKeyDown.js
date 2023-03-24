const input = document.querySelector("#inputArea").addEventListener('keydown', keyDown)

function keyDown() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = "Pressionou a tecla!"

}