class Botao{
  // criamos uma classe porque precisamos criar um componente
  // de botão, pois iremos reutilizá-lo varias vezes
  // de cores e texto diferentes
  constructor(cor, tamanho, texto, icone){
    // fazemos o construtor para definir os atributos
    // que a nossa classe terá
    this.cor = cor
    this.tamanho = tamanho
    this.texto = texto
    this.icone = icone
  }

  desenhaBotao(){
    // desenha botão é um método para inserir o botão
    // na tela quando invocado
    const novoBotaoNoDom = document.createElement('button')
    // novoBotaoNoDom agora é uma tag button vazia
    // e precisamos inserir o atributo class no html
    // para colocar nossas classes css
    novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`)
    // inserimos texto no html
    if(this.icone){
      //se this.icone tiver algum valor...
      // crio uma nova tag <i></i>  para poder inserir o ícone com fontawesome
      const tagIcone = document.createElement("i")
      //crio uma classe css para inserir qual ícone do fontawesom eu quero
      tagIcone.setAttribute("class", `fas ${this.icone}`)
      // insiro essa tag <i class="fa fa...."></i> dentro do botão      
      novoBotaoNoDom.appendChild(tagIcone)
      // crio um texto
      const text = document.createTextNode(this.texto)
      //e insiro dentro do botão tambrm
      novoBotaoNoDom.appendChild(text)
    }else{
      //se this.icone , não tiver valor, for false, null ou undefined...
      novoBotaoNoDom.innerHTML = this.texto
    }
    // inserimos botão na tela
    document.getElementById("buttons-section").appendChild(novoBotaoNoDom)
  }
}

// criamos um novo botão
const novoBotao = new Botao('verde', 'grande', 'click me!')
console.log(novoBotao)
// desenhamos ele na tela
novoBotao.desenhaBotao()

const botaoRoxo = new Botao('roxo', 'pequeno', 'botao roxo', 'fa-plus')
botaoRoxo.desenhaBotao()