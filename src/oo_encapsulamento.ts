import './function_global'

class Tv {
  _relacaoCanais: Array<number>
  _canalAtivo: number
  _volume: number
  constructor() {
    this._relacaoCanais = Array(2, 4, 6, 8, 10)
    this._canalAtivo = 5
    this._volume = 15
  }

  //getters setters
  get canalAtivo() {
    return this._canalAtivo
  }

  set canalAtivo(canal) {
    //
    if (this._relacaoCanais.indexOf(canal) !== -1) {
      this._canalAtivo = canal
    }
  }
}

let tv = new Tv()

tv.canalAtivo = 9
console.log(tv.canalAtivo)
