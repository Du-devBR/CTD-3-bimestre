let inputNameReference = document.querySelector('#inputName')
let inputPasswordReference = document.querySelector('#inputPassword')
let buttonReference = document.querySelector('#btnSignIn')
let smallReference = document.querySelector('#small')
buttonReference.addEventListener('click', function(event){
  event.preventDefault()

  if(inputNameReference.checkValidity() === true){

    inputNameReference.classList.remove('show')
    smallReference.classList.remove('show_small')

  }
  else{

    inputNameReference.classList.add('show')
    smallReference.classList.add('show_small')

  }

})
