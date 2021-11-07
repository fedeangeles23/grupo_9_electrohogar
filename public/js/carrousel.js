const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando CLICK en punto
// Saber la posicion de ese punto
//Aplicar un transform al translateX al grande
//quitar la clase activo de todos puntos
//añadir la clase activo al punto que hemos hecho click 

punto.forEach( (cadaPunto, i) => {
// Asignamos un evento CLICK a cadaPunto
punto[i].addEventListener('click',() =>{

        //guardar la posicion de ese PUNTO
        let posicion = i 
        //calculado el espacio que se desplaza el contenedor grande
        let operacion = posicion * -60

            //Mueve la imagen
        grande.style.transform = `translateX(${ operacion }%)`

        //recorremos todos los puntos
        punto.forEach( (cadaPunto, i) =>{
                // quitamos la clase activo a todos los punto
                punto[i].classList.remove('activo')
        })
        // añade la clase activo en el punto que hemos hecho click 
        punto[i].classList.add('activo')
    })
})