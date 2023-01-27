import './function_global';

let nome = 'Jorge';
let idade = 29;
let sexo = 'Masculino';
let profissao = 'Programador';

let objeto = {
  nome: nome,
  idade: idade,
  sexo: sexo,
  profissao: profissao,
  exibirResumo: function () {
    console.log(
      `${(this, nome)}, tem ${this.idade} anos, é do sexo ${this.sexo} e é ${
        this.profissao
      }`
    );
  }
};

console.log(objeto);
objeto.exibirResumo();

let objeto2 = {
  nome,
  idade,
  sexo,
  profissao,
  exibirResumo2() {
    console.log(
      `${(this, nome)}, tem ${this.idade} anos, é do sexo ${this.sexo} e é ${
        this.profissao
      }`
    );
  }
};

console.log(objeto2);
objeto.exibirResumo();
