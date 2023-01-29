import './function_global'

const NOME = 'diego'

function nome() {
  const NOME = 'queijo'
  console.log('dentro da função ' + NOME)
}

nome()

console.log('fora da função ' + NOME)
