const input = document.querySelector("#inputArea").addEventListener('focus', focusInput)

function focusInput() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = "Selecionou!"

}