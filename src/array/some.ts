import '../OO/function_global'
import { Title, Body } from '../OO/function'

/*
  O método some () testa se pelo menos um elemento na 
  matriz passa no teste implementado pela função fornecida. 
  Retorna true se, na matriz, encontrar um elemento para o 
  qual a função fornecida retorne true; caso contrário, 
  retornará false. Não modifica a matriz.
*/

const array = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = (element: number) => element % 2 === 0

console.log(array.some(even))
// Expected output: true
