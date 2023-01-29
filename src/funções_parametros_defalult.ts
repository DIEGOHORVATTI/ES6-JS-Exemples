import './function_global'

function boasVindas(
  nome_usuario = 'Diego',
  atualizacao = 'V4.5.2.10',
  data = '07/11/2020'
) {
  document.write(
    `Bem vindo ${nome_usuario}, atualização disponivel ${atualizacao} novas funções com recursos incriveis ${data}`
  )
}

//boasVindas(undefined, 'V4.5.8.7.5' , '08/11/2020')
boasVindas('macarrão', 'V4.5.8.7.5', '08/11/2020')
