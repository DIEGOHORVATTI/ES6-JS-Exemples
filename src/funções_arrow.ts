import './function_global'

/*
	let quadrado = function(x = 5) {
		return x * x
	}
	*/

/*
	let quadrado = (x) => {
		return x * x
	}
	*/

/*//um parametro não precisa de ()
	let quadrado = x => x * x //RETURN IMPLÍCITO

	document.write( quadrado(2) )
	*/

/*let parImpar = function(numero) {

		if (numero % 2 === 0) {
			return 'par'
		} else {
			return 'ímpar'
		}
	}*/

/*let parImpar = numero => {
		
		if (numero % 2 === 0) {
			return 'par'
		} else {
			return 'ímpar'
		}
	}*/

let parImpar = (numero: number) => (numero % 2 === 0 ? 'par' : 'Ímpar') //return implícito

document.write(parImpar(4))
