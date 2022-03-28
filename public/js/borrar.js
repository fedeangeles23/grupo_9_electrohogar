const open = document.getElementById('borrar');
const modal_container = document.getElementById('modal_containerBorrar');
const close = document.getElementById('closeBorrar');
console.log(modal_container)
open.addEventListener('click', (e) => {
e.preventDefault()
console.log(modal_container)
    modal_container.style.display = "flex"
   
});

close.addEventListener('click', () => {
    modal_container.style.display = "none"
});