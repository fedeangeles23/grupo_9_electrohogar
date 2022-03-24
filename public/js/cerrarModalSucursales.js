const open = document.getElementById('openSucur');
const modal_container = document.getElementById('modal_containerSucur');
const close = document.getElementById('closeSucur');
console.log(modal_container)
open.addEventListener('click', (e) => {
e.preventDefault()
console.log(modal_container)
    modal_container.style.display = "flex"
   
});

close.addEventListener('click', () => {
    modal_container.style.display = "none"
});