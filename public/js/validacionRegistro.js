function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    $name = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $lastname = qs('#lastname'),
    $lastErrors = qs('#lastErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
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

$lastname.addEventListener('blur', function(e){
    console.log(e)
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

$email.addEventListener('blur', function(e) { 
    console.log(e) 
    switch (true) {
        case !$email.value.trim():
            $emailErrors.innerHTML = 'El email es obligatorio';
            $email.classList.add('is-invalid')
            validationsErrors = true
            break;
    case ! regExEmail.test($email.value):
    $emailErrors.innerHTML = 'debe tener un @';
    $email.classList.add('is-invalid')
    validationsErrors = true
    break;
        default:
            $email.classList.remove('is-invalid');
            $email.classList.add('is-valid')
            $emailErrors.innerHTML = ""
            validationsErrors = false
            break;
    };
})


$pass.addEventListener('blur', function(e){
    let value = e.target.value;
  switch (true) {
      case !value.trim():
          $passErrors.innerHTML = 'La contraseña es obligatorio'
          $pass.classList.add('is-invalid');
          validationsErrors = true
          break;
    /*  case !regExPass.test(value):
          $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
          $pass.classList.add('is-invalid');
          validationsErrors = true
          break   */
      default: 
          $pass.classList.remove("is-invalid");
          $pass.classList.add('is-valid');
          $passErrors.innerHTML = "";
          validationsErrors = false
          break;
  }
})

$pass2.addEventListener('blur', function(e){
    let value = e.target.value;
    switch (true) {
        case !$pass2.value.trim():
            $pass2Errors.innerHTML = 'El campo contraseña es obligatorio'
            $pass2.classList.add('is-invalid')
            validationsErrors = true
            break;
        case $pass2.value !== $pass.value:
            $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
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

})