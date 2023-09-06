const url = `https://rickandmortyapi.com/api/character`


const listCharacters = document.querySelector('#characters')

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const status = urlParams.get('status')
const species = urlParams.get('species')



if (status == 'alive' ) {
    getAllAlive()
} else if (status == 'dead') {
    getAllDead()
} else if (species == 'human') {
    getAllHuman()
} else if (species == 'alien') {
    getAllAlien()
} else {
    getCharacters()
}

function getAllHuman() {

    fetch(url + '?species=human')
    .then(response => response.json())
    .then(data => {
    
      data.results.forEach(character => {
            const characterElement = document.createElement('div')
            characterElement.className = 'character'
            listCharacters.appendChild(characterElement)

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

}

function getAllAlien() {

    fetch(url + '?species=alien')
    .then(response => response.json())
    .then(data => {
    
      data.results.forEach(character => {
            const characterElement = document.createElement('div')
            characterElement.className = 'character'
            listCharacters.appendChild(characterElement)

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

}

function getAllAlive() {

    fetch(url + '?status=alive')
    .then(response => response.json())
    .then(data => {
    
      data.results.forEach(character => {
            const characterElement = document.createElement('div')
            characterElement.className = 'character'
            listCharacters.appendChild(characterElement)

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

}

function getAllDead() {

    fetch(url + '?status=dead')
    .then(response => response.json())
    .then(data => {
    
      data.results.forEach(character => {
            const characterElement = document.createElement('div')
            characterElement.className = 'character'
            listCharacters.appendChild(characterElement)

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

}

function getCharacters() {

    fetch(url)
    .then(response => response.json())
    .then(data => {
    
      data.results.forEach(character => {
            const characterElement = document.createElement('div')
            characterElement.className = 'character'
            listCharacters.appendChild(characterElement)

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

}

