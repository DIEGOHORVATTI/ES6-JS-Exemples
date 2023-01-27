import './function_global'

//um osftwere de marcenaria
//cadeira e sofá

//paradgma procegural

//cadeira
/*let qtde_pernas = 4
	let giratoria = false
	let cor = 'azul'*/

//array de cadeiras
/*let cadeiras = Array()

	cadeiras[0] = Array()
	cadeiras[0]['qtde_pernas'] = 4
	cadeiras[0]['giratoria'] = false
	cadeiras[0]['cor'] = 'azul'

	cadeiras[1] = Array()
	cadeiras[1]['qtde_pernas'] = 1
	cadeiras[1]['giratoria'] = true
	cadeiras[1]['cor'] = 'preto'

	function girar_cadeira(indice) {
		if(cadeiras[indice]['giratoria'] === true) {
			console.log('cadeira é giratoria')
		} else {
			console.log('cadeira não é giratória')
		}
	} 

	function adicionar_cadeira(qtde_pernas, giratoria, cor) {
		let cadeira = Array()

		cadeira['qtdade_pernas'] = qtde_pernas
		cadeira['giratoria'] = giratoria
		cadeira['cor'] = cor

		cadeiras.push(cadeira)
	}

	adicionar_cadeira(3, false, 'preto')

	console.log(cadeiras)*/

//paradgma de oo

class Cadeira {
  qtdade_pernas: number
  giratoria: boolean
  cor: 'vermelho' | 'preto' | 'azul'

  constructor(
    qtdade_pernas: number,
    giratoria: boolean,
    cor: 'vermelho' | 'preto' | 'azul'
  ) {
    this.qtdade_pernas = qtdade_pernas
    this.giratoria = giratoria
    this.cor = cor
  }

  girarCadeira() {
    if (this.giratoria === true) {
      console.log('cadeira é giratoria')
    } else {
      console.log('cadeira não giratoria')
    }
  }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'preto'))
cadeiras.push(new Cadeira(1, true, 'vermelho'))

console.log(cadeiras)
//cadeira2.girarCadeira()
