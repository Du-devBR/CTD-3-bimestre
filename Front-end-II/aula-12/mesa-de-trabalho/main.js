let inputTextReference = document.querySelector('#text')
let buttonReference = document.querySelector('#buttonSubmit')
let listText = []

buttonReference.addEventListener('click', function(event){

  event.preventDefault()

  if(inputTextReference.value === ''){

    alert('Necessario adionar um texto')

  }
  else{

    listText.push(inputTextReference.value)

    localStorage.setItem('textos', JSON.stringify(listText))

  }
})
// console.log(listText)
