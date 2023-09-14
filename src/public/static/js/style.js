document.getElementById('input').addEventListener('change', ()=>{
  if(document.body.className.indexOf('dark') ===-1) {
    document.body.classList.add('dark');
  }
  else {
    document.body.classList.remove('dark')
  }
})

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 30) { // Cambia 50 a la cantidad de desplazamiento que desees antes de que la barra cambie de color
      navbar.style.backgroundColor = "#493226";
      navbar.style.height = "60px"; 
  } else {
      navbar.style.backgroundColor = "#493226";
      navbar.style.height = "90px";
    }
});