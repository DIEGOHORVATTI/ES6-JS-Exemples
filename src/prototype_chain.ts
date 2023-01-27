import './function_global';

/* ver conceitos de novo depois */

const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
};

myObject.city = 'Barcelona';
myObject.city;

let animal = {
  attr1: 'a'
};
let vertebrado = {
  __proto__: animal,
  attr2: 'b'
};
let ave = {
  __proto__: vertebrado,
  attr3: 'c'
};

console.log(ave.__proto__, ave.attr3);
console.log(vertebrado.__proto__, vertebrado.attr2);
console.log([animal.attr1]);
