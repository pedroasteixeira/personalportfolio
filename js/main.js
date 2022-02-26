const BtnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

BtnMobile.addEventListener('click', toggleMenu)

// FECHAR AO CLICAR NO MENU

const fechar = document.querySelectorAll('.botao-fechar')

function fecharMenu() {
    nav.classList.remove('active')
}

for(i = 0; i < fechar.length; i++) {
    fechar[i].addEventListener('click', fecharMenu) 
}

