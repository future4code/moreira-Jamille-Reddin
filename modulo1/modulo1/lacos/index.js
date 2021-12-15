// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1. Esse código adiciona valor para a variavel "valor". No console será impresso 10, pois i = 0,
// i menor que 5 e seu valor somado a ele mesmo daria 10. 


// 2. 
// a) No console será impresso os numeros maiores que 18. "19,21,23,25,27,30".

// b) Sim, o for/of seria o suficiente. Ao invés de colocar "> 18" colocariamos o numero do indice.

// 3. Se o usuário digitasse o numero 4, seria impresso 4 linhas no console.


// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1. 

let quantosPets = Number(prompt("Quantos pets você tem?"))
let i = 0
while(quantosPets === i ){
    console.log("Que pena! Você pode adotar um pet!")
   i++
}

while(quantosPets > i){
    let nomeDosPets = prompt("Qual o nome do seu pet?")
    i++


}



// 2. 

const arrayOriginal = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function imprimeArray(){
    console.log(arrayOriginal)
}

imprimeArray()
