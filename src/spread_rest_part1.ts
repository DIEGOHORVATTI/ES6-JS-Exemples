import './function_global'

//contexto spread

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//array

let listaCurso1 = ['desktop', 'mobile']
let listaCurso2 = ['windows', 'linux']
let listaCursoCompleto = [
  'desktop Completo',
  'mobile Completo',
  ...listaCurso1,
  ...listaCurso2
]

console.log(listaCursoCompleto)

//pessoa
let pessoa = { nome: 'joao', idade: 27 }
let clone = { endereco: 'Rua ABC', ...pessoa }

console.log(clone)
