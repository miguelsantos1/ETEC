import { classificarIMC, classificação } from './classificarImc.js'
import { showNameandIMC } from './mostrarAluno.js'
import { normalPeso, baixoPeso, obesidadeGraulI, obesidadeGraulII, obesidadeGraulIII, sobrePeso } from "./categorias.js"



const aluno = {
    nome: "Miguel",
    idade: 17,
    peso: 60,
    altura: 1.65,
    imc: undefined,
  }
  const aluno2 = {
    nome: "Henry",
    idade: 17,
    peso: 60,
    altura: 1.75,
    imc: undefined,
  }
  const aluno3 = {
    nome: "Marcelo",
    idade: 17,
    peso: 60,
    altura: 1.95,
    imc: undefined,
  }
  const aluno4 = {
    nome: "Renan",
    idade: 17,
    peso: 70,
    altura: 1.70,
    imc: undefined,
  }
  const aluno5 = {
    nome: "Fernanda",
    idade: 16,
    peso: 50,
    altura: 1.44,
    imc: undefined,
  }
  const aluno6 = {
    nome: "Mario",
    idade: 20,
    peso: 200,
    altura: 1.44,
    imc: undefined,
  }
  const aluno7 = {
    nome: "constantine",
    idade: 19,
    peso: 400,
    altura: 1.44,
    imc: undefined,
  }
  const aluno8 = {
    nome: "Fernanda",
    idade: 10,
    peso: 110,
    altura: 1.44,
    imc: undefined,
  }
  
  const aluno9 = {
    nome: "Fatima",
    idade: 20,
    peso: 40,
    altura: 1.90,
    imc: undefined,
  }
  const aluno10 = {
    nome: "Matheus",
    idade: 30,
    peso: 90,
    altura: 1.70,
    imc: undefined,
  }
  const aluno11 = {
    nome: "Carla",
    idade: 40,
    peso: 30,
    altura: 1.70,
    imc: undefined,
  }
  const aluno12 = {
    nome: "Maria",
    idade: 16,
    peso: 50,
    altura: 1.44,
    imc: undefined,
  }
  
  const aluno13 = {
    nome: "Marta",
    idade: 16,
    peso: 100,
    altura: 1.44,
    imc: undefined,
  }
  
  const aluno14 = {
    nome: "Jennifer",
    idade: 16,
    peso: 50,
    altura: 1.44,
    imc: undefined,
  }
  
  const aluno15 = {
    nome: "Samara",
    idade: 16,
    peso: 50,
    altura: 1.50,
    imc: undefined,
  }
  
  const aluno16 = {
    nome: "Jonatan",
    idade: 16,
    peso: 300,
    altura: 1.90,
    imc: undefined,
  }
  
  const aluno17 = {
    nome: "Carol",
    idade: 23,
    peso: 50,
    altura: 1.44,
    imc: undefined,
  }
  
  const aluno18 = {
    nome: "Marina",
    idade: 14,
    peso: 50,
    altura: 1.50,
    imc: undefined,
  }
  
  const aluno19 = {
    nome: "Kauan",
    idade: 30,
    peso: 55,
    altura: 1.20,
    imc: undefined,
  }
  
  const aluno20 = {
    nome: "Samira",
    idade: 20,
    peso: 700,
    altura: 1.44,
    imc: undefined,
  }





console.log(showNameandIMC(aluno))
console.log(showNameandIMC(aluno2))
console.log(showNameandIMC(aluno3))
console.log(showNameandIMC(aluno4))
console.log(showNameandIMC(aluno5))
console.log(showNameandIMC(aluno6))
console.log(showNameandIMC(aluno7))
console.log(showNameandIMC(aluno8))
console.log(showNameandIMC(aluno9))
console.log(showNameandIMC(aluno10))
console.log(showNameandIMC(aluno11))
console.log(showNameandIMC(aluno12))
console.log(showNameandIMC(aluno13))
console.log(showNameandIMC(aluno14))
console.log(showNameandIMC(aluno15))
console.log(showNameandIMC(aluno16))
console.log(showNameandIMC(aluno17))
console.log(showNameandIMC(aluno18))
console.log(showNameandIMC(aluno19))
console.log(showNameandIMC(aluno20))


// CLASSIFICAR IMCs individualmente POR ALUNO

console.log(classificarIMC(aluno))
console.log(classificarIMC(aluno2))
console.log(classificarIMC(aluno3))
console.log(classificarIMC(aluno4))
console.log(classificarIMC(aluno5))
console.log(classificarIMC(aluno6))
console.log(classificarIMC(aluno7))
console.log(classificarIMC(aluno8))
console.log(classificarIMC(aluno9))
console.log(classificarIMC(aluno10))
console.log(classificarIMC(aluno11))
console.log(classificarIMC(aluno12))
console.log(classificarIMC(aluno13))
console.log(classificarIMC(aluno14))
console.log(classificarIMC(aluno15))
console.log(classificarIMC(aluno16))
console.log(classificarIMC(aluno17))
console.log(classificarIMC(aluno18))
console.log(classificarIMC(aluno19))
console.log(classificarIMC(aluno20))


// MOSTRA PESSOAS NA CLASSIFICAÇÃO E QUANTIDADE

console.log(classificação(baixoPeso))
console.log(classificação(normalPeso))
console.log(classificação(sobrePeso))
console.log(classificação(obesidadeGraulI))
console.log(classificação(obesidadeGraulII))
console.log(classificação(obesidadeGraulIII))


console.table(baixoPeso)