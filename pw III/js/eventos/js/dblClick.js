const dblClick = document.querySelector("#doubleClickArea").addEventListener('dblclick', doubleClick)

function doubleClick() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = 'Clique duplo!'

}