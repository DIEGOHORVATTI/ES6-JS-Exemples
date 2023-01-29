import './function_global'

let Carro = function () {
  this.cor = 'Amarelo'
  this.modelo = 'Gol'
  this.velocidadeAtual = 0
  this.velocidadeMaxima = 180

  this.acelerar = function () {
    let velocidade = this.getVelocidadeAtual() + 10
    this.setVelocidadeAtual(velocidade)
  }

  this.getVelocidadeAtual = function () {
    return this.velocidadeAtual
  }

  this.setVelocidadeAtual = function (velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual
  }
}

let carro = new Carro()
console.log(carro.velocidadeAtual)
carro.acelerar()
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.velocidadeAtual = 100
carro.acelerar()
console.log(carro.velocidadeAtual)

let Carro2 = function () {
  var velocidadeMaxima = 180
  var quilometrosRodados = 0

  this.cor = 'Amarelo'
  this.modelo = 'Gol'
  this.velocidadeAtual = 0

  this.acelerar = function () {
    let velocidade = this.getVelocidadeAtual() + 10

    if ((velocidade = velocidadeMaxima)) {
      velocidade = velocidadeMaxima
    }

    this.setVelocidadeAtual(velocidade)
    setQuilometrosRodados()
    console.log(quilometrosRodados)
  }

  this.getVelocidadeAtual = function () {
    return this.velocidadeAtual
  }

  this.setVelocidadeAtual = function (velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual
  }

  var setQuilometrosRodados = function () {
    quilometrosRodados += 0.5
  }
}

let carro2 = new Carro2()
console.log(carro.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.velocidadeAtual = 100
carro2.acelerar()
console.log(carro2.velocidadeAtual)

console.log(carro)
console.log(carro2)
