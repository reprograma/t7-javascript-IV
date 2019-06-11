// Selecionamos os inputs
const userInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
// selecionamos o formulário
const form = document.getElementById("login-form")

form.addEventListener("submit", event => {
  // Ao acontecer o evento de submit no form
  // previnimos a ação padrão de atualizar a página
  event.preventDefault()
  // verifica se usuário e senha estão preenchidos
  if(userInput.value && passwordInput.value){
    // se os valores existirem chama a função de fazer login
    login()
  }else{
    // senão exibe uma mensagem de que os campos são obrigatórios
    alert("usuario e senha são obrigatórios")
  }
})


const login = () => {
  // pegamos o valor dos campos e convertemos para 
  // JSON para poder enviar para a API
  const bodyParaEnviar = JSON.stringify({
    user: userInput.value, 
    pass: passwordInput.value
  })

  // Fazemos a requisição com Fetch
  fetch('https://lais-api-reprograma.herokuapp.com/login', {
  method:'POST',
  //Enviamos o objeto em json no "body" da requisição
  body: bodyParaEnviar,
  headers: {
    'Accept': 'application/json',
    'Content-type':'application/json'
  }
})
// recebemos a resposta em JSON
.then(resposta => resposta.json())
// convertemos para objeto javascript
.then(objetoJavascript => {
  // a api de login me devolve um token e guardo ele no localStorage
  // motivo: Vou precisar passar ele ao chamar apis fechadas,
  // que exigem que eu esteja logada para acessá-las
  localStorage.setItem('token', objetoJavascript.token)
  // redireciona para home
  window.location.href="home.html"
})
.catch(error => alert("Erro ao fazer login"))
}