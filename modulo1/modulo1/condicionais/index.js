// 1.
//a)Ele testa a condição adicionada e da o resultado caso seja verdade ou não.
// Nesse caso ele testa se o numero adicionado é multiplo de 2 ou seja, numero par.

// b) Passam no teste numeros pares, multiplos de 2.

// c) Não passam, numeros ímpares.

//  2. 
// a) O codigo serve para o usuario adicionar uma fruta e descobrir o preço dela. 
// b) Caso o usuario escolha maçã, será impresso "O preço da fruta, maçã, é R$ 2,25."
// c) A mensagem seria "O preço da fruta Pêra é R$ 5"   

// 3. 
// a) O prompt está pedindo ao usuário que insira um numero.
// b) Com 10 seria: Esse numero passou no teste. -10: não aparece nada pois não foi definida uma mensagem.
// c) Haverá o erro na mensagem, pois ela foi definida dentro de um escopo local. 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO.

// 1. 
const idadeDoUsiario = Number(prompt("Qual a sua idade?"))

if (idadeDoUsiario > 18) {
  console.log("Você pode dirigir.")
} else {
  console.log("Você não pode dirigir.")
}

// 2. 
let turnoDeEstudo = prompt("Qual seu turno de estudo? Digite 'M' para matutino, 'V' para vespertino e 'N' para noturno").toLowerCase()

if(turnoDeEstudo === "m" ){
    console.log("Bom dia!")

} else if(turnoDeEstudo === "v"){
    console.log("Boa tarde!")

} else if(turnoDeEstudo === "n"){
    console.log("Boa noite!")
}
// 3. 
    switch(turnoDeEstudo){
        case "m": 
        console.log("Bom dia!")
        break
        case "v":
        console.log("Boa tarde!")
        break
        case "n":
        console.log("Boa noite!")
        break
}

// 4. 
const generoDoFilme = prompt("Escolha um gênero de filme").toLowerCase()
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if(generoDoFilme !== "Fantasia" && valorIngresso <= 15){
    console.log ("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
    }

   