import './function_global';

// avião
// atributor cor e modelo; método levantarVoo

// objeto literal
let A1 = {
  cor: 'Branco',
  modelo: 'Airbus a380',
  levantarVoo: function () {
    console.log('levantando voo');
  }
};

//---------------------------------------------------------

//função construtora
let Aviao2 = function () {
  this.cor = 'Branco';
  this.Modelo = '14 Bis';
  this.levantarVoo = function () {
    console.log('levantando voo');
  };
};

let A2 = new Aviao2();

//---------------------------------------------------------

//classe
class Aviao3 {
  cor: string;
  modelo: string;
  constructor() {
    this.cor = 'Vermelho';
    this.modelo = 'Embraer E-Jets';
  }

  levantarVoo() {
    console.log('levantando voo');
  }
}

let A3 = new Aviao3();

console.log(A1);

console.log(A2);

console.log(A3);
