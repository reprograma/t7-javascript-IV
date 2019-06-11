const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const cepError = document.getElementById("cep-error")

const getData = url => {
  return new Promise((resolve, reject) => {
    const requisicao = new XMLHttpRequest()
    requisicao.open("GET", url)
    requisicao.onload = function () {
      if (requisicao.status === 200) {
        const resposta = JSON.parse(requisicao.responseText)
        resolve(resposta)
      }
    }
    requisicao.onerror = () => {
      reject("CEP inválido")
    }
    requisicao.send()
  })
}

cepInput.addEventListener("blur", () => {
  const valorDoCampo = cepInput.value
  if (valorDoCampo) {
    fetch(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then((resultadoAPI) => {
        cepInput.classList.remove("error")
        cepError.innerHTML = ""
        cepInput.value = resultadoAPI.cep
        logradouroInput.value = resultadoAPI.logradouro
        complementoInput.value = resultadoAPI.complemento
        bairroInput.value = resultadoAPI.bairro
        localidadeInput.value = resultadoAPI.localidade
        ufInput.value = resultadoAPI.uf
      })
      .catch(erro => {
        cepInput.classList.add("error")
        cepError.innerHTML = erro
        logradouroInput.value = ""
        complementoInput.value = ""
        bairroInput.value = ""
        localidadeInput.value = ""
        ufInput.value = ""
      })
  } else {
    cepInput.classList.add("error")
    cepError.innerHTML = "Campo obrigatório"
  }
})