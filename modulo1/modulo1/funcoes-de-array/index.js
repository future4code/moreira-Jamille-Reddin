// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.
//a) Será impresso a lista de nomes e apelidos no array.

//2. 
//a) No console serão impresso apenas os nomes.

//3.
//a) Será impresso nomes e apelidos que não forem "Chijo"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
 const listaDeNomes = pets.map((pets, index, array) => {
    return pets.nome

})
 console.log(listaDeNomes)

// b)
 const nomesSalsichas = pets.filter((pets, index, array) => {
    return pets.raca === "Salsicha"
 })
 console.log(nomesSalsichas)

 //c) 
const poodles = pets.filter((pets, index, array) => {
   return pets.raca === "Poodle"
    
})
   
const mensagemDesconto = (poodles) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}!`
}

const frasePoodles = poodles.map(mensagemDesconto)
console.log(frasePoodles)


// 2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 const listaDeProdutos = produtos.map((produtos, index, array) => {
    return produtos.nome
 })
console.log(listaDeProdutos)

//b)


