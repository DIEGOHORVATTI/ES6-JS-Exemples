import './function_global'

// requisição http
// resposta http json
let Bicicleta1 = {
  cor: 'Branco',
  marcha: 'Única',
  aro: 12,
  pedalar() {
    console.log('Metodo pedalar executado')
  }
}

let Bicicleta2 = {
  cor: 'Preto',
  marcha: 'Única',
  aro: 14,
  pedalar() {
    console.log('Metodo pedalar executado')
  }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

//---------------lógica http-------------

let BicicletaFactory = function (cor: string, marcha: string, aro: number) {
  return {
    cor,
    marcha,
    aro,
    pedalar() {
      console.log('Pealando')
    }
  }
}

let Bicicleta3 = BicicletaFactory(' Vermelho', 'Única', 25)
console.log(Bicicleta3)

let Bicicleta4 = BicicletaFactory('Branco e pedalar', 'Única', 30)
console.log(Bicicleta4)
