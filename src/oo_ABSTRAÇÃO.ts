import './function_global'

//modelo so objeto
class ContaBancaria {
  valorDeposito: number = 0

  agencia: number
  numeroConta: number
  saldo: number
  limite: number
  constructor() {
    this.agencia = 1075
    this.numeroConta = 8351125
    this.saldo = 50
    this.limite = 450
  }

  depositar(valorDeposito: number) {
    this.saldo += valorDeposito
  }

  sacar(valorSaque: number) {
    this.saldo -= valorSaque
  }

  consultarSaldo() {
    return this.saldo
  }
}

let x = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(80)
console.log(x.consultarSaldo())
x.sacar(65)
console.log(`\n${x.consultarSaldo()}`)
