import './function_global';

let assinatura = {
  idCliente: 1000,
  descricao: 'ass Acesso a internet',
  status() {
    console.log('Ativo');
  }
};

console.log(assinatura.descricao);

let y = assinatura;

console.log(y.descricao);

///

y.descricao = 'y Internet + tv';

console.log(assinatura.descricao);
console.log(y.descricao);
