let UserInputReference = document.querySelector('#userName')
let ContactInputReference = document.querySelector('#userContact')
let textInputReference = document.querySelector('#textInput')
let caracterCount = document.querySelector('#count')

UserInputReference.addEventListener('click', function(event){

  document.querySelector('.teste').style.opacity = 0


})

UserInputReference.addEventListener('mouseover', function(event){

  document.querySelector('.teste').style.opacity = 1


})

ContactInputReference.addEventListener('click', function(event){

  document.querySelector('.teste1').style.opacity = 0

})

ContactInputReference.addEventListener('mouseover', function(event){

  document.querySelector('.teste1').style.opacity = 1

})

function limiText(valor) {
  quant = 50;
  total = valor.length;

  textInputReference.addEventListener('keydown', function(event){

    if(quant >= total) {
      
      resto = quant - total;
      document.getElementById('count').innerHTML = resto;

      if(resto <= 10) {

        document.getElementById('count').style.color = 'red'
      }
      } else {
          document.getElementById('textInput').value = valor.substr(0,quant);
    }
  })
}
