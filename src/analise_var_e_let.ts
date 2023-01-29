import './function_global'

//3 escopos global, função e bloco

let anime = 'Full Metall Alquimit'

{
  let anime = 'Boku no Hero Academia'
  console.log('dentro do bloco ' + anime)
}

console.log('fora do bloco ' + anime)
