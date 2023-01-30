import { Body, Title } from '../OO/function'
import '../OO/function_global'

/*
  O método join () cria e retorna uma nova string concatenando todos 
  os elementos em uma matriz (ou um objeto semelhante a uma matriz), 
  separados por vírgulas ou uma string separadora especificada. 
  Se a matriz tiver apenas um item, esse item será retornado sem o uso 
  do separador.
  obs: not modific is array
*/

Title('Exemplo 1 - concatenanda string')
const textoArray: Array<string> = ['um', 'dois', 'tres', 'quatro']
Body(textoArray)
Body(textoArray.join(' . '))

Title('Exemplo 2 - apenas um elemento retono sem o separador')
Body(['um item'].join(' . '))
Body(['um item', 'dois itens'].join(' . '))

Title('Exemplo 2 - apenas um elemento retono sem o separador')
const a = ['Wind', 'Water', 'Fire']
Body(a.join()) // 'Wind,Water,Fire'
Body(a.join(', ')) // 'Wind, Water, Fire'
Body(a.join(' + ')) // 'Wind + Water + Fire'
Body(a.join('')) // 'WindWaterFire'

Title('Chamando join() em objetos não relacionados à matriz')
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4
}
Body(Array.prototype.join.call(arrayLike))
Body(Array.prototype.join.call(arrayLike, '.'))
