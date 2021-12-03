
// 1. 
// a) o resultado da multiplicação 5x os valores da função. 10, 50.
// b) não apareceria nada no console.

// 2.
// a) Explique o que essa função faz e qual é sua utilidade.
// Se tiver "cenoura" na frase retorna true e se nao tiver retorna false.
// b) i. true
// ii. false
// iii. false

// -----------------------------------------------------------------------------------------------

// Exercicio de Escrita de Código

// 1.
// a)

const meuNome = "Jamille"
const minhaIdade = 26
const ondeMoro = "Curitiba"
const profissao = "estudante"

function imprimeFrase(){
console.log(`Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${ondeMoro} e sou ${profissao}`)

}

imprimeFrase()

// b)

const seuNome = "Luiza"
const suaIdade = 24
const ondeMora = "São Paulo"
const suaProfissao = "atriz"

function suasInformacoes(nome, idade, endereco, trabalho){
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${trabalho}`)}

suasInformacoes(seuNome, suaIdade, ondeMora, suaProfissao)

// 2. 
// a)
function doisNumeros(numero1, numero2){
const soma = numero1+numero2
return soma
}
const resultado = doisNumeros(10, 50)
console.log(resultado)

// b)

function numeroTrueorFalse(number1, number2){
const compara = number1 >= number2
return compara
}
const verdadeiroFalso = numeroTrueorFalse(25,32)
console.log(verdadeiroFalso)

// c)

function parOuImpar(umNumero){
const parOuNao = umNumero % 2 === 0  
return parOuNao

}
const resultadoParImpar = parOuImpar(5)
console.log(resultadoParImpar)

// d)

function frase(umaFraseBonita){

umaFraseBonita = umaFraseBonita.toUpperCase().

return umaFraseBonita

}

const frase1 = frase("Essa é uma frase bonita e profunda" )
console.log(frase1)

//por algum motivo meu lenght nao funciona e da undefined. Se eu coloco só o toUpperCase() funciona normalmente.

//3. 




