// Evento Onload => Chama a função apos carregar a pagina interia.


// function mostrarNome() {

//   alert('ola eduardo')
// }

// window.onload = function() {

//   mostrarNome()
//   console.log('documento carregado')

// }


// Evento Onclick => Utilizando direto no Javascript


let butaoReferencia = document.querySelector('#mainBtn')
let userNameReference = document.querySelector('#userName')

butaoReferencia.addEventListener('click', function(event){

  //exemplo com formulario
  document.querySelector('#enviado').style.opacity = 1  // colocando pacidade em 1 na mensagem
  console.log('o click foi detectado')
  event.preventDefault()  //Não deixa a pagina recarregar

})

//Evento mouseOver => adionando uma função apos passar o mouse sobre o elemento
userNameReference.addEventListener('mouseover', function(event){

  document.querySelector('#userNameDica').style.opacity = 1

})

//Evento Keydoen => Adiciona uma função sempre que aperta uma tecla
userNameReference.addEventListener('keydown', function(event){

  console.log('digitou')
})
// butaoReferencia.onclick = function(){

//   clicarBotao()

// }

// function clicarBotao() {

//   console.log('clicou no botão')

// }
