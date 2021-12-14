// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a -b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((num) => {
        if(num % 2 === 0){
            return num
        }
    }) 
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const par = array.filter((num) => {
        if(num % 2 === 0){
            return num
        }
    })
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
       if ( array[i] > maior ) {
          maior = meuArray[i];
       }
    } 
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
   }else if(ladoA === ladoB || ladoB === ladoC){
        return "Isósceles"
   }else if(ladoA !== ladoB && ladoA !== ladoC){
        return "Escaleno"
   }
}
   
    


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}