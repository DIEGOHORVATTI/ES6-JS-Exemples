import '../OO/function_global'
import { Title, Body } from '../OO/function'

/*
  O método some () testa se pelo menos um elemento na 
  matriz passa no teste implementado pela função fornecida. 
  Retorna true se, na matriz, encontrar um elemento para o 
  qual a função fornecida retorne true; caso contrário, 
  retornará false. Não modifica a matriz.
*/

Title('Retorna true se tiver algum item par no array')
const array = [3, 6, 9, 3, 2]
const even = (element: number) => element % 2 === 0
console.log(array, '\n', array.some(even))
Body()

Title('retorna cada elemento do array')
array.some((element) => {
  Body(element)
})
Body()

Title('retorna cada elemento e indice do array')
array.some((element, index) => {
  Body(element, index)
})
Body()

Title('retorna cada elemento e indice do array e o respectivo array')
array.some((element, index, array) => {
  Body(element, index, array)
})

Title('funcao como parametro do some')
const data = (parms: number) => parms === 3
Body(array.some(data))
