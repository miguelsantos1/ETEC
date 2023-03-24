const onmouseout = document.querySelector("#mouseOutArea").addEventListener('mouseout', mouseout)

function mouseout() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = 'O mouse saiu do elemento!'

}