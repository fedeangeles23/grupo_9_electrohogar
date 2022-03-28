if( !sessionStorage.getItem("welcome")){
    Swal.fire({
        title: "Bienvenido a ElectroHogar",
        timer: 4000,
        timerProgressBar: true
    })
    
    sessionStorage.setItem("welcome", true)
//aca
 }


   const loginCheck = () => {
       if(sessionStorage.getItem("login") && !sessionStorage.getItem("ok")) {
         sessionStorage.setItem("ok", true)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
    
          Toast.fire({
            icon: 'success',
            title: 'Logueado con exito'
          })
        }
       }
 