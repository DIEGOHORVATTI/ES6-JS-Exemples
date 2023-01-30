import { Body, Title } from '../OO/function'
import '../OO/function_global'

/*
  O método find() retorna o primeiro elemento na matriz fornecida que 
  satisfaz a função de teste fornecida.  Se nenhum valor satisfizer 
  a função de teste, indefinido será retornado.
*/

const array1 = [5, 12, 8, 130, 44]
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
]

Title('Primeiro elemneto da matriz que corresponde a condição')
const found: number = array1.find((element) => element > 10)
Body(found)

Title('Primeiro elemneto do objeto que corresponde a condição')
function isCherries(fruit: { name: string; quantity: number }) {
  return fruit.name === 'cherries'
}
Body(inventory.find(isCherries))

Title('Usando a arrow function de seta e a desestruturação')
const result = inventory.find(({ name }) => name === 'cherries')
Body(result)
