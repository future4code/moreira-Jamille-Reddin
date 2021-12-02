// 1.
// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


// let array
// console.log('a. ', array) // undefined, pois nenhum valor foi declarado.

// array = null
// console.log('b. ', array) // null.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // 11

// let i = 0
// console.log('d. ', array[i]) // erro


// const valor = array[i+6]
// console.log('f. ', valor) //erro

// -----------------------------------------------------------------------------------

// 2.

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ONIBUS EM MIRROCOS, 27.

// -------------------------------------------------------------------------------------

// EXERCICIO DE ESCRITA DE CÓDIGO

// 1)
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsurario = prompt("Qual o seu email?")
console.log(`O email ${emailDoUsurario}, foi cadastrado com sucesso. Seja bem vinda(o) ${nomeDoUsuario}, !`)

//2)
const comidasFavoritas = ["Risoto", "Pizza", "Sushi", "Feijoada", "Lasanha"]
                    //       0         1        2          3           4       
// a.
console.log(comidasFavoritas)

// b.
console.log("Essas são minhas comidas favoritas")
console.log(comidasFavoritas[0]) 
console.log(comidasFavoritas[1]) 
console.log(comidasFavoritas[2]) 
console.log(comidasFavoritas[3]) 
console.log(comidasFavoritas[4]) 

// c.
const suaComidaFavorita = prompt("Qual sua comida favorita?")
comidasFavoritas[1] = suaComidaFavorita
console.log(comidasFavoritas)

// 3)

const listaDeTarefas = []
console.log(listaDeTarefas)
const suasTarefas = prompt("Diga 3 coisas que precisa fazer hoje")
console.log(suasTarefas)






























