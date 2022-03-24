document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 16));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function() {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }
         
}