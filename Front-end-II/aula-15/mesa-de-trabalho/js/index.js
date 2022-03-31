let cardRef = document.querySelector('.card')
let btnRandom = document.querySelector('#random')
// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

const obterUsuario = () => {
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data.results[0])
        console.log(data)
    });

function renderizarDadosUsuario(dados) {

    cardRef.innerHTML = `

    <img src="${dados.picture.large}">
    <div class = "infoName">
       <h1>${dados.name.first} ${dados.name.last}</h1>
       <p>${dados.email}</p>
       <small>Phone number: ${dados.phone}</small>
       <small>${dados.location.street.name} ${dados.location.street.number}
       ${dados.location.city} | ${dados.location.country}</small>
    </div>

    `

    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
 }
}

btnRandom.addEventListener('click', (e) => {
    e.preventDefault()
    obterUsuario()
})
/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
