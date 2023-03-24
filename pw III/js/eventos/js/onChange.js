const onChange = document.querySelector("#onChangeArea").addEventListener('change', changed)

function changed() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = 'Mudou!'

}