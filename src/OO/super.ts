import './function_global'

console.log(
  `*deve ficar antes do operador this \n *deve ser colocado nas classes filhas netas etc`
)

class Animal {
  cor: string
  tamanho: number
  peso: number
  constructor(cor: string, tamanho: number, peso: number) {
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }

  dormir() {
    console.log('Dormir')
  }
}

class Passaro extends Animal {
  bico: string
  constructor(bico: string, cor: string, tamanho: number, peso: number) {
    super(cor, tamanho, peso)
    this.bico = bico
  }

  voar() {
    console.log('Voar')
  }
}

class Papagaio extends Passaro {
  saberFalar: boolean
  constructor(saberFalar: boolean, cor: string, tamanho: number, peso: number) {
    super('Médio', cor, tamanho, peso)
    this.saberFalar = saberFalar
  }

  falar() {
    console.log('Falar')
  }
}

let papagaio = new Papagaio(true, 'verde', 20, 100)
console.log(papagaio)

let papagaio2 = new Papagaio(false, 'branco', 10, 50)
console.log(papagaio2)
