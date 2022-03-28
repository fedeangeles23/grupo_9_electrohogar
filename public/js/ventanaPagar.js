const open = document.getElementById('pagarV');
const modal_container = document.getElementById('modal_containerPagar');
const close = document.getElementById('closePagar');
console.log(modal_container)
open.addEventListener('click', (e) => {
e.preventDefault()
console.log(modal_container)
    modal_container.style.display = "flex"
   
});

close.addEventListener('click', () => {
    modal_container.style.display = "none"
});