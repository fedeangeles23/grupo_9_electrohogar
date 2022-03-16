function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    $name = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $numero = qs('#numero');
    $numeroErrors = qs('#numeroErrors');
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#fechaErrors'),
    $codigo = qs('#codigo');
    $codigoErrors = qs('#codigoErrors');
    $dni = qs('#dni');
    $dniErrors = qs('#dniErrors');
    regExDNI = /^[0-9]{7,8}$/,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    

 let validationsErrors = false; 

 $name.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$name.value.trim():
           $nameErrors.innerHTML = 'El campo nombre es obligatorio';
           $name.classList.add('is-invalid');
           validationsErrors = true
           break;
       case !regExAlpha.test($name.value):
           $nameErrors.innerHTML = 'Ingrese un nombre válido';
           $name.classList.add('is-invalid');
           validationsErrors = true
           break
       default:
           $name.classList.remove('is-invalid');
           $name.classList.add('is-valid');
           $nameErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$inputLastname.addEventListener('blur', function(){
    switch (true) {
        case !$inputLastname.value.trim():
            $lastnameErrors.innerHTML = 'El campo apellido es obligatorio'
            $inputLastname.classList.add('is-invalid')
            validationsErrors = true
            break;
        case !regExAlpha.test($inputLastname.value):
            $lastnameErrors.innerHTML = 'Ingresa un apellido válido'
            $inputLastname.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $inputLastname.classList.remove("is-invalid");
            $inputLastname.classList.add('is-valid')
            $lastnameErrors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$numero.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$numero.value.trim():
           $numeroErrors.innerHTML = 'El numero de la tarjeta es obligatorio';
           $numero.classList.add('is-invalid');
           validationsErrors = true
           break;
       case !regExAlpha.test($numero.value):
           $numeroErrors.innerHTML = 'El numero de la tarjeta debe tener 10 caracteres';
           $numero.classList.add('is-invalid');
           validationsErrors = true
           break
       default:
           $numero.classList.remove('is-invalid');
           $numero.classList.add('is-valid');
           $numeroErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$fecha.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$fecha.value.trim():
           $fechaErrors.innerHTML ='La fecha es obligatoria';
           $fecha.classList.add('is-invalid');
           validationsErrors = true
           break;
            case !regExAlpha.test($fecha.value):
                $fechaErrors.innerHTML = 'La fecha debe tener 4 caracteres';
                $fecha.classList.add('is-invalid');
                validationsErrors = true
                break
            default:
                $fecha.classList.remove('is-invalid');
                $fecha.classList.add('is-valid');
                $fechaErrors.innerHTML = "";
                validationsErrors = false;
                break;
    }
})

$codigo.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$codigo.value.trim():
           $codigoErrors.innerHTML = 'El codigo es obligatorio';
           $codigo.classList.add('is-invalid');
           validationsErrors = true
           break;
       case !regExAlpha.test($codigo.value):
           $codigoErrors.innerHTML = 'El codigo no es válido';
           $codigo.classList.add('is-invalid');
           validationsErrors = true
           break
       default:
           $codigo.classList.remove('is-invalid');
           $codigo.classList.add('is-valid');
           $codigoErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$dni.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$dni.value.trim():
           $dniErrors.innerHTML = 'El dni es obligatorio';
           $dni.classList.add('is-invalid');
           validationsErrors = true
           break;
       case !regExAlpha.test($dni.value):
           $dniErrors.innerHTML = 'el dni debe tener de 8 a 10 caracteres';
           $dni.classList.add('is-invalid');
           validationsErrors = true
           break
       default:
           $dni.classList.remove('is-invalid');
           $dni.classList.add('is-valid');
           $dniErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})



})