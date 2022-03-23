const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', (e) => {
e.preventDefault()
    modal_container.style.display = "flex"
   
});

close.addEventListener('click', () => {
    modal_container.style.display = "none"
});