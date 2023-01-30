import '../OO/function_global'
import { Title, Body } from '../OO/function'

/*
  O método splice () altera o conteúdo de uma matriz removendo 
  ou substituindo os elementos existentes e / ou adicionando 
  novos elementos no lugar. Para acessar parte de uma matriz 
  sem modificá-la, consulte slice ().
*/

Title('array normal')
const months = ['Jan', 'March', 'April', 'June']
Body(months)

Title('array c/ splice adicionar')
months.splice(1, 0, 'Feb')
Body(months)

Title('array c/ splice alteração')
months.splice(0, 1, 'janeiro')
Body(months)

Title('Exemplos de uso')
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
Body(myFish)

Title('Adicione depois do índice 2 "tambor"')
myFish.splice(2, 0, 'tambor')
Body(myFish)

Title(
  'Remove "tambor" no indice 2 e Adicione depois do índice 2 "tambor" e "guitar"'
)
myFish.splice(2, 1, 'tambor', 'guitar')
Body(myFish)

Title('Remova o elemento no indice 3')
myFish.splice(3, 1)
Body(myFish)

Title('Remova 1 elemento do índice -2')
myFish.splice(-2, 1)
Body(myFish)

Title('Remova todos os elementos, começando no índice 2')
myFish.splice(2)
Body(myFish)
