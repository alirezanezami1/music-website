const menuOpen = document.getElementById('menu-open')
const menu = document.querySelector('.container .sidebar')
const menuClose = document.getElementById('meno-close')

menuOpen.addEventListener('click' , () => {
    menu.style.left = '0'
})

menuClose.addEventListener('click' , () => {
    menu.style.left = '-100%'
})
