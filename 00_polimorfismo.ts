import './function_global';

class Animal {
  cor: string;
  tamanho: number;
  peso: number;

  constructor(cor, tamanho, peso) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.peso = peso;
  }

  dormir() {
    console.log('Dormir');
  }
}

class Passaro extends Animal {
  bico: string;
  constructor(bico, cor, tamanho, peso) {
    super(cor, tamanho, peso);
    this.bico = bico;
  }

  voar() {
    console.log('Voar');
  }
}

class Papagaio extends Passaro {
  saberFalar: string;
  constructor(saberFalar, cor, tamanho, peso) {
    super('Médio', cor, tamanho, peso);
    this.saberFalar = saberFalar;
  }

  falar() {
    console.log('Falar');
  }
}

class Avestruz extends Passaro {
  constructor() {
    super('Grande', 'Branco e Preto', 250, 20000);
  }

  enterarCabeça() {
    console.log('enterar cabeça');
  }

  voar() {
    console.log('Não voa');
  }
}

//let animal = new Animal('vermelho', 10, 150)
//console.log(animal)

//let passaro = new Passaro('Médio', 'vermelho', 10, 150)
//Console.log(passaro)

let papagaio = new Papagaio(true, 'verde', 20, 100);
console.log(papagaio);

papagaio.voar();

let avestruz = new Avestruz();
avestruz.enterarCabeça();
avestruz.voar();
