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

let slider = document.querySelector("#sliderContenedorPresentacion")
let sliderIndividual = document.querySelectorAll(".contenidoSliderPre")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5200;

window.addEventListener("resize", function(){
  width = sliderIndividual[0].clientWidth;

})

setInterval(function(){
  slides();
}, intervalo);

function slides (){
  slider.style.transform = "translate("+(-width*contador)+"px)";
  slider.style.transition = "transform 1s";
  contador++; 

  if(contador == sliderIndividual.length){
    setTimeout(function(){
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador=1;
    },2600)
  }
}