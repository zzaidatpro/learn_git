
const menu = document.getElementById("menu");
const hide_nemu = document.getElementById("hide_menu");

function interrupteur(){
    hide_nemu.classList.toggle("hide_class")
}

menu.addEventListener('click', interrupteur);
