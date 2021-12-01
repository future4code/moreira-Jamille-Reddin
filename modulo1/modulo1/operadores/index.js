// 1. 

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // resultado = false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // resultado = false

// // resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // RESULTADO = true


// 2. Os numeros estão como strings, não numeros, o que será impresso é a concatenação dos numeros digitados.

// 3. A conversão do string para numbers resolveria o problema.

// let primeiroNumero = prompt("Digite um numero!")
// let primeiroNumeroUm = Number(primeiroNumero)
// let segundoNumero = prompt("Digite outro numero!")
// let segundoNumeroDois = Number(segundoNumero)


// const soma = primeiroNumeroUm + segundoNumeroDois
// console.log(soma)

// EXERCICIO DE ESCRITA DE CÓDIGO

// 1.

let idadeUsuario = prompt("Qual a sua idade?")
let suaIdade = Number(idadeUsuario)
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")
let idadeDele = Number(idadeMelhorAmigo)

let resultado = idadeUsuario - idadeMelhorAmigo

comparacao = idadeUsuario >= idadeMelhorAmigo
console.log("Sua idade é maior que a do seu melhor amigo?", comparacao)
console.log(resultado)

// 2. 

let numeroPar = prompt("Insira um numero par!")
let parNumero = Number(numeroPar)
const numeroDois = 2
const segundoNumero = Number(numeroDois)

let resultado2 = parNumero / segundoNumero


console.log(resultado2)

// Se o usuário colocar um numero impar ele divide por 2 mesmo assim dando um numer o quebrado.










