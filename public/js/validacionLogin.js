function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
     $email = qs('#email');
     $emailErrors = qs('#emailErrors');
     $pass = qs('#pass');
     $passErrors = qs('#passErrors');
     regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
     regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

     
  let validationsErrors = false; 

  $pass.addEventListener('blur', function(e){
      let value = e.target.value;
    switch (true) {
        case !value.trim():
            $passErrors.innerHTML = 'La contraseña es obligatoria'
            $pass.classList.add('is-invalid');
            validationsErrors = true
            break;
      /*  case !regExAlpha.test($pass.value):
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
         $email.addEventListener('blur', function(e) { 
            console.log(e) 
            switch (true) {
                case !$email.value.trim():
                    $emailErrors.innerHTML = 'El email es obligatorio';
                    $email.classList.add('is-invalid')
                    validationsErrors = true
                    break;
            case ! regExEmail.test($email.value):
            $emailErrors.innerHTML = 'Debe tener un @';
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
    
    }) 

 