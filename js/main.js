const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

window.addEventListener('load', iniciar, false);

function iniciar() {
  var imagen = document.getElementById('imagen');
  imagen.addEventListener('mouseover', peligro, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function peligro() {
  var imagen = document.getElementById('imagen').src = "img/Oscar2.jpg";
}

   function restaurar() {
    var imagen = document.getElementById('imagen').src = "img/Oscarc.png";
  }



const darkmodebt = document.getElementById('darkmodebt')
const body = document.body;

darkmodebt.addEventListener('click', function () {
body.classList.toggle ('dark-mode');
});
