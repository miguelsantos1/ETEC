import { imc } from "./calcularImc.js"
import { normalPeso, baixoPeso, obesidadeGraulI, obesidadeGraulII, obesidadeGraulIII, sobrePeso } from "./categorias.js"



export function classificarIMC(objetoAluno) {

    if (objetoAluno.imc <= 18.5) {
      
      baixoPeso.push(objetoAluno.nome)
      return objetoAluno.nome +': abaixo do peso'
   } 
  
   if(objetoAluno.imc <= 24.9) {
      normalPeso.push(objetoAluno.nome)
     return objetoAluno.nome +': peso Normal'
   }
  
   if(objetoAluno.imc <= 29.9) {
    sobrePeso.push(objetoAluno.nome)
     return objetoAluno.nome +': sobrepeso'
   }
   
   if(objetoAluno.imc <= 34.9) {
    obesidadeGraulI.push(objetoAluno.nome)
     return objetoAluno.nome +': Obesidade grau I'
   }
  
   if(objetoAluno.imc <= 39.9) {
    obesidadeGraulII.push(objetoAluno.nome)
     return objetoAluno.nome +': Obesidade grau II'
   }
  
   if(objetoAluno.imc > 40) {
    obesidadeGraulIII.push(objetoAluno.nome)
     return objetoAluno.nome +': Obesidade grau III'
   }
  }

  
  export function classificação(categoria) {

    if (categoria == baixoPeso) {
      return `Abaixo do peso: ${baixoPeso} | ${baixoPeso.length} na categoria`
    }
  
    if (categoria == normalPeso) {
      return `Peso normal: ${baixoPeso} | ${baixoPeso.length} na categoria`
    }
  
    if (categoria == sobrePeso) {
      return `Sobrepeso: ${sobrePeso} | ${sobrePeso.length} na categoria`
    }
  
    if (categoria == obesidadeGraulI) {
      return `Obesidade grau I: ${obesidadeGraulI} | ${obesidadeGraulI.length} na categoria`
    }
  
    if (categoria == obesidadeGraulII) {
      return `Obesidade grau II: ${obesidadeGraulII} | ${obesidadeGraulII.length} na categoria`
    }
  
    if (categoria == obesidadeGraulIII) {
      return `Obesidade grau III: ${obesidadeGraulIII} | ${obesidadeGraulIII.length} na categoria`
    }
    
  }
