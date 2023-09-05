const url = `https://rickandmortyapi.com/api/character`


const listCharacters = document.querySelector('#characters')

fetch(url)
.then(response => response.json())
.then(data => {
    
    data.results.forEach(character => {
        const characterElement = document.createElement('div')
        characterElement.className = 'character'
        listCharacters.appendChild(characterElement)

        console.log(character.status)

        let status
        let gender
        let species

        if (character.species == "Human") {
            species = "Humano"
        } else {
            species = "Alienigena"
        }

        if (character.status == "Alive") {
            status = "Vivo (a)"
        } else if (character.status == "Dead"){
            status = "Morto (a)    "
        } else {
            status = "Status de vida desconhecido"
        }

        if (character.gender == "Male") {
            gender = "Homem"
        } else {
            gender = "Mulher"
        }

        characterElement.innerHTML = 
        `
        <img src=${character.image}
        <p> ${character.name} </p>
        <p> ${gender} </p>
        <p> ${species} </p>
        <p> ${status} </p>

        `

    })
}).catch(error => {
    console.error(`erro na api: ${error}`)
})