var nome = "Cleinaldo"

var notaPrimB = 9
var notaSegB = 7
var notaTerB = 4
var notaQuarB = 2

var somaNotas = notaPrimB + notaSegB + notaTerB + notaQuarB
var mediaFinal = somaNotas /4
var notaFixada = mediaFinal.toFixed(1)

console.log("Bem vindo " + nome + " sua média final foi ")
console.log(mediaFinal)

if(mediaFinal > 5){
  console.log("Você foi aprovado")
}else if (mediaFinal < 5){
  console.log("Reprovado")
}
// write your code here
// variáveis, strings, console.log, toFixed, operações mate, concatenação.