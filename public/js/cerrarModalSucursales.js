const sucursales = () => {
    Swal.fire({
        title: "Selecciona la localidad de entrega",
        input:'select',
        inputPlaceholder: 'Eligí tu provincia',
        inputValue:'',
        inputOptions: {
            Buenos: "Buenos Aires",
            Catamarca: "Catamarca",
            Chaco: "Chaco",
        
     }
    })
}
