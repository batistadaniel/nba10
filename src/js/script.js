let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let backBoston = document.getElementById("maior-campeao");
let corHistLiga = document.getElementById("historia-da-liga");

backBoston.style.backgroundColor = '#1d7446';

corHistLiga.style.color = '#1d7446';

// Mostra o menu ao clicar no botao
btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botao
menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});
