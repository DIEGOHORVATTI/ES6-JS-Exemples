import './function_global'

//3 escopos: (  global, fução, broco  )

//global funçoes e variaveis definidas do começo ao fim do <script>

//função resebe variaveis de global mais não retorna variaveis de função ao escopo global

//broco recebe escopos globais e retorna a funções e outros blocos

//bloco
var anime = 'sword art online'

console.log('global ' + anime)

function x() {
  console.log('função ' + anime)
}

x()

if (true) {
  console.log('bloco ' + anime)
}
