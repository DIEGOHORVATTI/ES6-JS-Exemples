import './function_global'

let produto = {
  descricao: 'notbook',
  preco: 1800,
  detalhes: {
    fabricante: 'abc',
    modelo: ''
  }
}

//composição
// é um
// tem um

//token
//array => []
//objeto => {}

// let { descricao, preco } = produto

//let { descricao: d, preco: p, } = produto

//let { descricao: d, preco: p, desconto: l = 'bola' } = produto
//console.log(d, p, l) //default

let {
  detalhes: { fabricante: x, modelo: y = 'não informado' }
} = produto

console.log(x, y)
