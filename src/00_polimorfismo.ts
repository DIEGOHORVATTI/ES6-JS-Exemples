import './function_global'

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
  constructor(cor: string, tamanho: number, peso: number, bico: string) {
    super(cor, tamanho, peso)
    this.bico = bico
  }

  voar() {
    console.log('Voar')
  }
}

class Papagaio extends Passaro {
  saberFalar: string
  constructor(
    cor: number,
    tamanho: number,
    peso: number,
    bico: string,
    saberFalar: string
  ) {
    super('Médio', cor, tamanho, peso)
    this.saberFalar = saberFalar
  }

  falar() {
    console.log('Falar')
  }
}

class Avestruz extends Passaro {
  constructor() {
    super('Pequeno', 20, 30, 'Grande')
  }

  enterarCabeça() {
    console.log('enterar cabeça')
  }

  voar() {
    console.log('Não voa')
  }
}

//let animal = new Animal('vermelho', 10, 150)
//console.log(animal)

//let passaro = new Passaro('Médio', 'vermelho', 10, 150)
//Console.log(passaro)

let papagaio = new Papagaio(10, 20, 10, 'ola', 'Brasileir')
console.log(papagaio)

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterarCabeça()
avestruz.voar()
