const checkUser = () => {
  // verifica se usuario ja esta logado
  if(localStorage.getItem("token")){
    // se estiver, buscar as informações do usuario
   getUser()
  }else{
    // se não tiver token, redireciona para a tela de login
    window.location.href = "index.html"
  }
}

const getUser = () => {
  // api de dados do usuario
  fetch("https://randomuser.me/api/")
  // responde em json
  .then(response => response.json())
  // converte para objeto javascript para que possamos acessar
  .then(objJavascript => {
    // exibe dados no HTML por meio da função criaPainel
    document.getElementById("profile").innerHTML = criaPainel(objJavascript.results[0])
    document.getElementById("username").innerHTML = objJavascript.results[0].name.first
  })
  .catch(err => console.log(err))
}

const criaPainel = (user) => {
  return `
  <div class="panel text-center padding">
  <figure class="image is-128x128 margin-auto padding">
    <img src="${user.picture.medium}" alt="" class="is-rounded">
  </figure>
  <div class="content">
    <p>
      <strong>${user.name.first} ${user.name.last}</strong>
    </br>
    <i class="fas fa-mobile-alt"></i>
    <small>cel ${user.cell}</small>
    </p>
  </div>
  <div class="content">
    <button class="button is-warning" onclick="testarApi()">Testar API</button>
  </div>
  <div class="content columns">
    <div class="columns">
      <div>
      <i class="far fa-envelope"></i>
      ${user.email}
      </div>
    </div>
    <div class="columns">
      <div>
      <i class="fas fa-map-marker-alt"></i>
      ${user.location.city}
      </div>
    </div>
    <div class="columns">
      <div>
      <i class="far fa-calendar"></i>
      ${user.dob.date}
      </div>
    </div>
  </div>
  <div class="content padding"><button class="button is-danger" onclick="signOut()">Sair</button></div>
</div>
  `
}

const testarApi = () => {
  // para acessar a api de recurso precisamos do token que está
  // no localStorage e aqui acessamos ele
  fetch("https://lais-api-reprograma.herokuapp.com/resource", {
    // passamos o nosso token de autenticação no header 
    // da chamada
    headers: {
      'Accept': 'application/json',
      'Content-type':'application/json',
      //Autorização para acessa recurso
      'Authorization':`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then(res => res.json())
  .then(result => alert("sucesso"))
  .catch(err => alert(err))
}

const signOut = () => {
  //  esta função faz lougout, para isso vamos limpar o localStorage
  localStorage.clear()
  // e redirecionamos o usuário para a tela de login
  window.location.href = "index.html"
}

// Função que será executada assim que este arquivo ser 
// importado no html
checkUser()