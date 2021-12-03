// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaTriangulo = Number(prompt("Insira a altura"))
  const larguraTriangulo = Number(prompt("Insira a largura"))
  const calculoArea = alturaTriangulo * larguraTriangulo
console.log(calculoArea)

}
// EXERCÍCIO 02
function imprimeIdade(){
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual ano estamos hoje?"))
  const anoNascimento = Number(prompt("Qual ano você nasceu?"))
  const idadeUsuario = anoAtual - anoNascimento
  console.log(idadeUsuario)
}

  

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso % (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const qualSeuNome = prompt("Qual o seu nome?")
  const qualSuaIdade= Number(prompt("Qual a sua idade?"))
  const seuEmail = prompt("Qual o seu email?")
console.log(`Meu nome é ${qualSeuNome}, tenho ${qualSuaIdade} anos, e o meu email é ${seuEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringAtual = string.toUpperCase()
  console.log(stringAtual)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {}
  // implemente sua lógica aqui