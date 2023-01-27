import './function_global';

//3 escopos: (  global, fução, broco  )

//global funçoes e variaveis definidas do começo ao fim do <script>

//função resebe variaveis de global mais não retorna variaveis de função ao escopo global

//broco recebe escopos globais e retorna a funções e outros blocos também retorna variaveis de bloco nara o global epara funções

//--variavel global--//
var anime = 'sword art online';

//global
console.log('global ' + anime);

//função
function x() {
  console.log('função ' + anime);
}

//bloco
if (true) {
  console.log('bloco ' + anime);
  var Anime = 'Avatar';
  console.log('var de bloco ' + Anime);
}

//var de boloco no global
console.log('var de bloco no global ' + Anime);

//var de bloco na função
function T() {
  console.log('var de bloco na função ' + Anime);
}

T();

//bloco na função
function Y() {
  if (true) {
    console.log('bloco na função ' + anime);
  }
}

x();
Y();

console.log('________________________________');

function varE() {
  var animes = 'Hunter x Hunter';
  console.log('global ' + animes);

  function varL() {
    //undefined
    console.log('função da função ' + Anime);

    //variavel da função sem elevação
    var animes = 'Naruto';
    console.log('bloco da função ' + animes);
  }

  console.log('global ' + animes);
  varL();
}

varE();

console.log('________________________________');

function varD() {
  var anime = 'One piece';
  console.log(anime);
}

varD();

//variavel que não subio de nivel
console.log(anime);
