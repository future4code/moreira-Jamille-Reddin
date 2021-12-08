// Exercícios de Interpretação de código.

// 1. 
// console.log(filme.elenco[0]) - será impresso: Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) - será impresso: Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) - será impresso: canal Globo, 14h.

// 2.

// a) 
// console.log(cachorro) -nome: Juca, idade: 3,raca: SRD.
// console.log(gato) - nome: Juba, idade: 3, raca: SRD.
// console.log(tartaruga) -nome: Jubo, idade: 3, raca SRD.


// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? 
// Os 3 pontos significam "spread operator", que é uma sintaxe para copiar partes de um objeto e assim 
// adicionar, mudar alguma informação, preservando as declarações não alteradas.

// 3.

// a)
// console.log(minhaFuncao(pessoa, "backender")) - false.
// console.log(minhaFuncao(pessoa, "altura")) - undefined.

// b) False pois foi declarado que Caio não é backender e undefined pois não há a informação.

// Exercícios de escrita de código.

// 1.

// a)
const pessoa = {
    nome: "Jamille",
    apelidos: ["Jami", "Jamie", "Mille"]

}

function fraseImpressa(){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

}
fraseImpressa(pessoa)

// b)
const novaPessoa = {
    ...pessoa,
    apelidos: ["Já", "Jamis", "Mi"]
    
}
console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`)

// 2.

//a)
const infosPessoas = {
    nome: "Gabriel",
    idade: 27,
    profissao: "Cozinheiro"

}

//b)
function imprimirFrase(){
    console.log([infosPessoas.nome,infosPessoas.nome.length,infosPessoas.idade, infosPessoas.profissao, infosPessoas.profissao.length ])
}
imprimirFrase(infosPessoas)

// 3.
//a)
const carrinho = []
    
// b)
const frutas = {
   frutaVermelha: "Morango", disponibilidade: true,
   frutaAmarela: "Banana", disponibilidade: false,
   frutaVerde: "Limão", disponibilidade: true
   
}
    

//c) 
function carrinhoCheio(carrinho=[]){
    frutaVermelha.push(1)
    return frutaVermelha
}

carrinhoCheio()