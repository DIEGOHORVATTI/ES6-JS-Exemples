import '../OO/function_global'
import { Title, Body } from '../OO/function'

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true }
]

console.log(produtos.map((p) => p.preco * 4))
