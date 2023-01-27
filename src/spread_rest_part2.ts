import './function_global';

// contexto rest - juntamos dados

function soma(...junt) {
  let resultado = 0;
  junt.forEach((v) => (resultado += v));

  //console.log(junt)
  return resultado;
}

console.log(soma(3, 8, 5, 7, -8, 10, 115));

function multiplicacao(m, ...p) {
  //console.log(m)
  let resultado = 0;
  //console.log(p)

  p.forEach((v) => (resultado += m * v));

  return resultado;
}

console.log(multiplicacao(2, 5, 8, 9, 6, 3, 1));
