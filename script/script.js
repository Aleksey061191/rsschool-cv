const btnmenu = document.querySelector('.burger-btn');
const sidebar = document.querySelector('.header-menu');

const active = (e) => {
    if (e.target && (e.target.classList.contains('burger-btn') || e.target.classList.contains('burger-btn-row'))){
        btnmenu.classList.toggle('burger-btn-active');
        sidebar.classList.toggle('header-menu-active');
    }
}
const inactive = (e) => {
    if (!e.target.classList.contains('header-menu-list') && !(e.target.classList.contains('burger-btn') || e.target.classList.contains('burger-btn-row'))){
        btnmenu.classList.toggle('burger-btn-active');
        sidebar.classList.toggle('header-menu-active');
    }
}

btnmenu.addEventListener('click', active);
window.addEventListener('click', inactive);