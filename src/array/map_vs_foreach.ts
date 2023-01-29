import '../OO/function_global'

const meuArrayIncrivel = [1, 2, 3, 4, 5]

const inicioForEach = performance.now()
meuArrayIncrivel.forEach((x) => (x + x) * 10000000000)
const finalForEach = performance.now()
console.log(
  `Velocidade do [forEach]: ${finalForEach - inicioForEach} milisegundos`
)

const inicioMap = performance.now()
meuArrayIncrivel.map((x) => (x + x) * 10000000000)
const finalMap = performance.now()
console.log(`Velocidade do [map]....: ${finalMap - inicioMap} milisegundos`)
