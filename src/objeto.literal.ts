import './function_global';

class Produto {
  descricao: string;
  preco: number;
  constructor(descricao, preco) {
    this.descricao = descricao;
    this.preco = preco;
  }

  verDescricao() {
    console.log(`${this.descricao} por apenas ${this.preco}`);
  }
}

let produto = new Produto('Notebook', 2220);
produto.verDescricao();

//--------------------------------------

let produtoLiteral = {
  descricao: 'Geladeira',
  preco: 100,
  verDescricao: function () {
    console.log(`${this.descricao} por apenas ${this.preco}`);
  }
};

produtoLiteral.verDescricao();
