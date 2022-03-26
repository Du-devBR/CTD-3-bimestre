let textosAdd = document.querySelector('#textosInput')
let listTextSave = JSON.parse(localStorage.getItem('textos'))

   textosAdd.innerHTML = ''
    for(let post of listTextSave){

      textosAdd.innerHTML += `
      <div class="textos1" id="textosInput">
      <p>${post}</p>
      </div>
      `
    }
