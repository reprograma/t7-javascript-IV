const nomesNoRole = [
  "Amanda","Ana","Andrezza","Beatriz","Brennda","Carina","Gabriela","Giovanna","Ingrid Pitta","Ingrid Nascimento","Isabela","Jessica","Josiane","Julia","Kamila","Luciane","Marília","Mayara","Michelle","Nina","Rafaela","Raissa","Roberta","Talita","Vinólia","Vitória"
]

const validacao = (nome) => {
  // valida se campo está vazio, caso não, dá um throw para ele 
  // cair no catch !
  if(nome === '') throw 'O campo está vazio'
  // valida se nome é do tipo string, senão dá um throw para ele
  // cair no catch
  if(typeof nome !== "string") throw 'Tipo inválida'
}

const procuraNome = nome => nomesNoRole.find((fulanoQueTavaNoRole, i) => {
  // procura o primeiro elemento no array que é verdadeiro
  // de acordo com a operação lógica que você passar
  return nome.toLowerCase() === fulanoQueTavaNoRole.toLowerCase()
})

const exibirNome = nome => {
  // a variável armazena o retorno da função procuraNome
  const estaNaLista = procuraNome(nome)
  // verificar se estaNaLista é uma variável que tem algum valor ou não
  // se tiver valor, será verdadeira e entrará no bloco
  if(estaNaLista){
    // estaNaLista verdadeira e imprime mensagem
    document.getElementById("nome").classList.add("is-valid")
    document.getElementById("status").innerHTML = `${estaNaLista} estava no rolê`
    // return para encerrar a função
    return
  }
  // caso estaNaLista não tiver valor, for vazia, ou undefined,
  // da um throw para cair no catch
  throw `${nome} nãããão estava no rolê`
}

document.getElementById("form-do-role").addEventListener("submit", function(event){
  // Tira a ação padrão de submit com preventDefault
  event.preventDefault()
  // limpamos o nosso status (caso tenha alguma mensagem lá)
  document.getElementById("status").innerHTML = ""
  if(document.getElementById("nome").classList.contains("is-valid")){
    document.getElementById("nome").classList.remove("is-valid")
  }
  if(document.getElementById("nome").classList.contains("is-invalid")){
    document.getElementById("nome").classList.remove("is-invalid")
  }
  // pegamos o valor do campo
  const valorCampo = document.getElementById("nome").value
  
  // precisamos validar o valor do valorCampo, caso esteja vazio
  // ou não seja do tipo String
  // caso tudo der sucesso, imprime a mensage pro usuário
  // senão imprime o erro
  // para isso usaremos o try catch, try executa funções
  // caso dentro delas dtenha um throw, irá cair no catch
  try{
    validacao(valorCampo)
    exibirNome(valorCampo)
    console.log("sucesso")
  }catch(erro){
    // caso deu algum problema enquanto as funções do bloco try era 
    // executado, irá cair aqui no catch e vamos imprimir o erro
    console.log("ops!")
    document.getElementById("status").innerHTML = erro
    document.getElementById("nome").classList.add("is-invalid")
  }
})