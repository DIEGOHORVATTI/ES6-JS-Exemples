import { Body, Title } from '../OO/function'
import '../OO/function_global'

/*
  O método reducer () executa uma função de retorno de chamada "redutor" 
  fornecida pelo usuário em cada elemento da matriz, em ordem, passando 
  no valor de retorno do cálculo no elemento anterior. O resultado final 
  da execução do redutor em todos os elementos da matriz é um valor único.
  */

const produtos = [
  { nome: 'Notebook', preco: 10, fragil: true },
  { nome: 'iPad Pro', preco: 10, fragil: true },
  { nome: 'Copo de Vidro', preco: 10, fragil: true },
  { nome: 'Copo de Plástico', preco: 10, fragil: false }
]

Title('Reduce - ex 1')
/*
  acumular recebe os novos precos e soma com o valor anterior,
  0 é o valor inicial do acumulador
*/
Body(produtos.reduce((acumulador, value) => acumulador + value.preco, 0))

Title('Reduce - ex 2')
Body(
  produtos
    .map((p) => p.preco * 2)
    .reduce((acumulador, value) => acumulador + value, 0)
)

Title('Reduce - ex 3')
Body(
  [1, 2, 3, 4, 5].map(function (item) {
    return Math.pow(item, 2)
  })
)
