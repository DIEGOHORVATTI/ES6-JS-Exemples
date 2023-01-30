import '../OO/function_global'
import { Title, Body } from '../OO/function'

/*
  O método filter () cria uma cópia superficial de uma 
  parte de uma determinada matriz, filtrada para baixo 
  apenas os elementos da matriz especificada que passam 
  no teste implementado pela função fornecida.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

Title('Itens que pasão no teste da função são copiados para um nova array')
const result = words.filter((word) => word.length > 6)
Body(words)
Body(result)

Title('Usando funções para validar')
function isBigEnough(value: number) {
  return value >= 10
}
//const filtered = [12, 5, 8, 130, 44].filter((x) => isBigEnough(x))
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
Body(filtered)
