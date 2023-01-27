import './function_global';

class Animal {
  cor: string;
  tamanho: null;
  peso: null;
  constructor() {
    this.cor = '';
    this.tamanho = null;
    this.peso = null;
  }

  dormir() {
    console.log('Dormir');
  }
}

class Cachorro extends Animal {
  orelhas: string;
  constructor() {
    super();
    this.orelhas = 'Grandes e caídas';
  }

  correr() {
    console.log('Correr');
  }

  rosnar() {
    console.log('Rosnar');
  }
}

class Passaro extends Animal {
  bico: string;
  constructor() {
    super();
    this.bico = 'Curto';
  }

  voar() {
    console.log('Voar');
  }
}

class Papagaio extends Passaro {
  saberFalar: boolean;
  constructor() {
    super();
    this.saberFalar = true;
  }

  falar() {
    console.log('Falar');
  }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

cachorro.dormir();
passaro.dormir();
papagaio.falar();
papagaio.dormir();
papagaio.voar();

console.log(cachorro);
console.log(passaro);
console.log(papagaio);
