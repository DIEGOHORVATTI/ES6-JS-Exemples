import './function_global'

let nome = 'Diego'

//console.log( `Oi ${nome}, tudo bem`)

/*console.log( `
			Oi ${nome}, 
			tudo bem
			`)*/

//console.log(`a soma de 4 + 4 é = ${4 + 4}`)

function calcularTerreno(x: number, y: number) {
  return x * y
}

console.log(`24M x 24M = ${calcularTerreno(24, 24)}`)
