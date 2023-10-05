let listElememts = document.querySelectorAll('.botonClick');

listElememts.forEach(listElememt => {
  listElememt.addEventListener('click', ()=>{
    
    listElememt.classList.toggle('arrow');
    
    let height = 0;
    let menu = listElememt.nextElementSibling;
    console.log(menu.scrollHeight)
    if(menu.clientHeight == "0"){
      height=menu.scrollHeight;
    }
    menu.style.height = height+"px";
  })
});