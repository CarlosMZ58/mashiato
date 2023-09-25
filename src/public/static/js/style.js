let listElememts = document.querySelectorAll('.botonClick');

listElememts.forEach(listElememt => {
  listElememt.addEventListener('click', ()=>{
    
    listElememt.classList.toggle('arrow');
  })
});