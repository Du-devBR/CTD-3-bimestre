let inputIdGithubRef = document.querySelector('#idGithub')
let btnSubmitRef = document.querySelector('#btnSubmit')
let imgPost = document.querySelector('#imgPerfil')
let namePost = document.querySelector('#namePerfil')


btnSubmitRef.addEventListener('click', e =>{

  e.preventDefault()

  fetch(`https://api.github.com/users/${inputIdGithubRef.value}`)
    .then(

      response => {

        response.json()

          .then(

            usuario => {

              imgPost.src = usuario.avatar_url
              namePost.textContent = usuario.name

            }
          )
      }
    )

})
