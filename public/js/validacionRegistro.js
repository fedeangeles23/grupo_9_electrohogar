function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    $name = qs('#name'),
    $nameErrors = qs('#nameErrors'),

    $lastname = qs('#lastname'),
    $lastErrors = qs('#lastErrors'),

    $lastname2 = qs('#lastname2'),
    $lastname2Errors = qs('#lastname2Errors'),

    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),

    $email2 = qs('#email2'),
    $email2Errors = qs('#email2Errors'),

    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),

    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),

    $pass3 = qs('#pass3'),
    $pass3Errors = qs('#pass3Errors'),

    $pass4 = qs('#pass4'),
    $pass4Errors = qs('#pass4Errors'),

    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    

 let validationsErrors = false; 

 $name.addEventListener('blur', function() {
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

$lastname.addEventListener('blur', function(){
    switch (true) {
        case !$lastname.value.trim():
            $lastErrors.innerHTML = 'El campo apellido es obligatorio'
            $lastname.classList.add('is-invalid')
            validationsErrors = true
            break;
        case !regExAlpha.test($lastname.value):
            $lastErrors.innerHTML = 'Ingresa un apellido válido'
            $lastname.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $lastname.classList.remove("is-invalid");
            $lastname.classList.add('is-valid')
            $lastErrors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$lastname2.addEventListener('blur', function(){
    switch (true) {
        case !$lastname2.value.trim():
            $lastname2Errors.innerHTML = 'El apellido es obligatorio'
            $lastname2.classList.add('is-invalid')
            validationsErrors = true
            break;
        case $lastname2.value !== $lastname.value:
            $lastname2Errors.innerHTML = 'Los apellidos no coinciden';
            $lastname2.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $lastname2.classList.remove("is-invalid");
            $lastname2.classList.add('is-valid')
            $lastname2Errors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$email.addEventListener('blur', function(){
    switch (true) {
        case !$email.value.trim():
            $emailErrors.innerHTML = 'El campo apellido es obligatorio'
            $email.classList.add('is-invalid')
            validationsErrors = true
            break;
        case !regExAlpha.test($email.value):
            $emailErrors.innerHTML = 'Ingresa un apellido válido'
            $email.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $email.classList.remove("is-invalid");
            $email.classList.add('is-valid')
            $emailErrors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$email2.addEventListener('blur', function(){
    switch (true) {
        case !$email2.value.trim():
            $email2Errors.innerHTML = 'El campo email es obligatorio'
            $email2.classList.add('is-invalid')
            validationsErrors = true
            break;
        case $email2.value !== $email.value:
            $email2Errors.innerHTML = 'Los emails no coinciden';
            $email2.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $email2.classList.remove("is-invalid");
            $email2.classList.add('is-valid')
            $email2Errors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$pass.addEventListener('blur', function(){
    switch (true) {
        case !$pass.value.trim():
            $passErrors.innerHTML = 'El campo contraseña es obligatorio'
            $pass.classList.add('is-invalid')
            validationsErrors = true
            break;
        case !regExPass.test($pass.value):
            $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $pass.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $pass.classList.remove("is-invalid");
            $pass.classList.add('is-valid')
            $passErrors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$pass3.addEventListener('blur', function(){
    switch (true) {
        case !$pass3.value.trim():
            $pass3Errors.innerHTML = 'El campo contraseña es obligatorio'
            $pass3.classList.add('is-invalid')
            validationsErrors = true
            break;
        case $pass3.value !== $pass.value:
            $pass3Errors.innerHTML = 'Las contraseñas no coinciden';
            $pass3.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $pass3.classList.remove("is-invalid");
            $pass3.classList.add('is-valid')
            $pass3Errors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$pass2.addEventListener('blur', function(){
    switch (true) {
        case !$pass2.value.trim():
            $pass2Errors.innerHTML = 'El campo contraseña es obligatorio'
            $pass2.classList.add('is-invalid')
            validationsErrors = true
            break;
        case !regExPass.test($pass2.value):
            $pass2Errors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $pass2.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $pass2.classList.remove("is-invalid");
            $pass2.classList.add('is-valid')
            $pass2Errors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

$pass4.addEventListener('blur', function(){
    switch (true) {
        case !$pass4.value.trim():
            $pass4Errors.innerHTML = 'El campo contraseña es obligatorio'
            $pass4.classList.add('is-invalid')
            validationsErrors = true
            break;
        case $pass4.value !== $pass2.value:
            $pass4Errors.innerHTML = 'Las contraseñas no coinciden';
            $pass4.classList.add('is-invalid')
            validationsErrors = true
            break;    
        default:
            $pass4.classList.remove("is-invalid");
            $pass4.classList.add('is-valid')
            $pass4Errors.innerHTML = ""
            validationsErrors = false
            break;
    }
})

})