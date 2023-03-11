import { imc } from "./calcularImc.js"

export function showNameandIMC(objetoAluno) {
    // REATRUBUINDO O IMC
    objetoAluno.imc = imc(objetoAluno.altura, objetoAluno.peso)
  
   return `Nome: ${objetoAluno.nome}\n IMC: ${objetoAluno.imc.toFixed(1)} \n`
  
  }