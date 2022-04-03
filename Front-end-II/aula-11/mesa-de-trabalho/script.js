let inputNameReference = document.querySelector('#nome');
let inputPasswordReference = document.querySelector('#pass')
let inputTelReference = document.querySelector('#telphone')
let bntSubmmitReference = document.querySelector('#btnSubmmit')
let inputHobbiesRef = document.querySelectorAll('input')
let alertHobbiesReference = document.getElementById('alertHobbies')
let alertRegionRef = document.querySelector('#alertRgion')
let inputNatRef = document.querySelectorAll('input')
let arrayHobbies = []

let validacaoNome = () => {
  if(inputNameReference.checkValidity() === true){

    inputNameReference.classList.remove('error')
    return true

  }
  else {
    inputNameReference.classList.add('error')
    return false

  }

}

let validacaoSenha = () => {

  if(inputPasswordReference.checkValidity() === true){

    inputPasswordReference.classList.remove('error')
    return true

  }
  else {
    inputPasswordReference.classList.add('error')
    return false
  }

}

let validacaoTelphone = () => {

  if(inputTelReference.checkValidity() === true){

    inputTelReference.classList.remove('error')
    return true

  }
  else {
    inputTelReference.classList.add('error')
    return false

  }

}

let selecaoDeHobbies = () => {

  for(let inputHobbies of inputHobbiesRef){

    if(inputHobbies.type === 'checkbox'){

      inputHobbies.addEventListener('click', function(){

        if(inputHobbies.checked){

          if(arrayHobbies.length < 4){

            arrayHobbies.push(inputHobbies.id)

          }
          else {
              alertHobbiesReference.classList.add('alert')
          }

        }
        else {

          arrayHobbies = arrayHobbies.filter(hobbieSelecionado => hobbieSelecionado !== inputHobbies.id)
          alertHobbiesReference.classList.remove('alert')

        }
        console.log(arrayHobbies)
      })
    }
  }
}

let selecaoDePais = () => {

  for(let inputNat of inputNatRef){

    if(inputNat.type === 'radio'){

      inputNat.addEventListener('click', function(){

        if(inputNat.checked){

          bntSubmmitReference.disabled = false

          if(inputNat.id === 'nacionalidadeBrasileira'){

            alertRegionRef.classList.add('alert_region_show')
            console.log('brasil não pode')

            bntSubmmitReference.disabled = true
          }
          else{

            (inputNat.id !== 'nacionalidadeBrasileira')
            alertRegionRef.classList.remove('alert_region_show')
            console.log('b pode')

          }
        }

      })
    }
  }
}

let habilitarBotao = () => {

  if(validacaoNome()
  && validacaoSenha()
  && validacaoTelphone()
  && selecaoDeHobbies(e)) {

    bntSubmmitReference.disabled = false

  }
  else {
    bntSubmmitReference.disabled = true
  }

}

inputNameReference.addEventListener('keyup', habilitarBotao)
inputPasswordReference.addEventListener('keyup', habilitarBotao)
inputTelReference.addEventListener('keyup', habilitarBotao)
bntSubmmitReference.addEventListener('click', function(event){
  // event.preventDefault()
})

selecaoDePais()
selecaoDeHobbies()
habilitarBotao()

