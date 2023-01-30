import { Body, Title } from '../OO/function'
import '../OO/function_global'

/*
  O método includes() determina se um array inclui 
  um determinado valor entre suas entradas, 
  Wretornando true ou false conforme apropriado.
*/

Title('Exemplos uso de includes')
const array1 = [1, 2, 3]
console.log(array1.includes(2))
console.log(array1.includes(0))

Body(['cat', 'dog', 'bat'].includes('cat')) // true
Body([1, 2, 3].includes(2)) // true
Body([1, 2, 3].includes(4)) // false
Body([1, 2, 3].includes(3, 3)) // false
Body([1, 2, 3].includes(3, -1)) // true
Body([1, 2, NaN].includes(NaN)) // true
Body(['1', '2', '3'].includes('3')) // false
