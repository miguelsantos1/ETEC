const mouseOver = document.querySelector("#mouseOverArea").addEventListener('mouseover', mouseover)

function mouseover() {

    const content = document.querySelector('#contentElement')
    content.innerHTML = 'Moveu o mouse no elemento!'

}