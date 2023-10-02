// document.getElementById('input').addEventListener('change', ()=>{
//   if(document.body.className.indexOf('dark') ===-1) {
//     document.body.classList.add('dark');
//   }
//   else {
//     document.body.classList.remove('dark')
//   }
// })
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

const pagina = document.querySelector("html");
const interruptor = document.querySelector (".interruptor");
const boton = document.querySelector('.botoninterruptor');
let dia = true;
boton.addEventListener('click',function(){
  if(dia){
    pagina.style.setProperty('--colorfondo', '#1f1c1c');
    pagina.style.setProperty('--colorDia', '#1f1c1c');
    pagina.style.setProperty('--colornoche', '#ffc26f');
    pagina.style.setProperty('--colornegro', '#fff');
    pagina.style.setProperty('--colorTexto', '#fff');
    pagina.style.setProperty('--colorTarjetaTiposCafe', '#f3c283');
    pagina.style.setProperty('--colorContenedorTestimonio', '#493226');
    pagina.style.setProperty('--colorhovermetodos', '#302b2b8a');
    interruptor.style.left = '25px';
  }
  else{
    pagina.style.setProperty('--colorfondo', '#fff');
    pagina.style.setProperty('--colorDia', '#ffc26f');
    pagina.style.setProperty('--colornoche', '#1f1c1c ');
    pagina.style.setProperty('--colorTexto', '#000');
    pagina.style.setProperty('--colornegro', '#000');
    pagina.style.setProperty('--colorTarjetaTiposCafe', '#6b4020');
    pagina.style.setProperty('--colorContenedorTestimonio', '#ebc895');
    pagina.style.setProperty('--colorhovermetodos', '#c9b0b08a');
    interruptor.style.left = '0';
    interruptor.style.transition = '.4s ease-in-out';
  }
  dia = !dia;
});
