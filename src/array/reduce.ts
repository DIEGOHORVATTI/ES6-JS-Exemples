import './function_global'

const produtos = [
  { nome: 'Notebook', preco: 10, fragil: true },
  { nome: 'iPad Pro', preco: 10, fragil: true },
  { nome: 'Copo de Vidro', preco: 10, fragil: true },
  { nome: 'Copo de Plástico', preco: 10, fragil: false }
]
/*
  acumular recebe os novos precos e soma com o valor anterior,
  0 é o valor inicial do acumulador
*/

const total_1 = produtos.reduce(
  (acumulador, index) => acumulador + index.preco,
  0
)
console.log(total_1)

const total_2 = produtos
  .map((p) => p.preco /* * 2 */)
  .reduce((acumulador, index) => acumulador + index, 0)
console.log(total_2)

/* --------------- */

var numeros = [1, 2, 3, 4, 5] //vetor original
var quadrados = numeros.map(function (item) {
  return Math.pow(item, 2) //retorna o item original elevado ao quadrado
})

console.log(quadrados) //imprime 1,4,9,16,25
