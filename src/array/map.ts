import '../OO/function_global'
import { Title, Body } from '../OO/function'

/*
  O método map() cria uma nova matriz preenchida 
  com os resultados da chamada de uma função fornecida 
  em todos os elementos da matriz de chamadas.
*/

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true }
]
Body(produtos.map((p) => p.preco * 4))

const array: Array<number> = [2, 3, 5, 6, 8]

Title('retorna cada elemento do array')
array.map((element) => {
  Body(element)
})
Body()

Title('retorna cada elemento e indice do array')
array.map((element, index) => {
  Body(element, index)
})
Body()
Title('retorna cada elemento e indice do array e o respectivo array')
const array_type = array.map((element, index, array) => {
  Body(element, index, array)
})

Title('funcao como parametro do map')
const data = (parms: number) => parms === 3
Body(array.map(data))

Title('objetos no map')
Body(
  produtos.map(({ nome, preco }) => ({
    [nome]: preco
  }))
)

Title(
  'Mapeando uma matriz de números usando uma função que contém um argumento'
)
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4
}
console.log(Array.prototype.map.call(arrayLike, (x) => x))

Body(['1.4', '2.5', '3.5'].map((parms) => parseInt(parms)))
Body(['1', '2', '3'].map(Number))
Body(['1.1', '2.2e2', '3e300'].map(Number))
