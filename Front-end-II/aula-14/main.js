let inputCepRef = document.querySelector('#cep')
let btnSubmitRef = document.querySelector('button')
let inputLogradouroRef = document.querySelector('#logradouro')
let inputLocalidadeRef = document.querySelector('#localidade')

btnSubmitRef.addEventListener('click', event =>{

  event.preventDefault()

  fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
    .then(

      response => {

        response.json()
          .then(   //pega apenas a resposta da requisiçaõ em formato JSON

          success => {

            inputLogradouroRef.value = success.logradouro
            inputLocalidadeRef.value = success.localidade
            // console.log(success.logradouro)
          }
        )

      }
    )

})
