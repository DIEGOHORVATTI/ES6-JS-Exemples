import './function_global'

//destructuring

let frutas = ['abacaxi', 'uva', 'pera', 'mamão']

//let [a, b, , c] = frutas //pular um índice

let [a, b = 'b de bola', c, d, e = 'Banana'] = frutas //parametros dfault

//console.log( a, b, c, d, e)
let coisas = [
  ['leite', 'queijo'],
  ['abacaxi', 'uva']
]

let [[, n2], []] = coisas

console.log(n2)
