function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    $name = qs('#inputName'),
    $nameErrors = qs('#inputNameErrors'),

    $brand = qs('#inputBrand'),
    $brandErrors = qs('#inputBrandErrors'),

    $category = qs('#specificSizeSelect'),
    $categoryErrors = qs('#categoryErrors'),

    $subcategory = qs('#specificSizeSelectS'),
    $subcategoryErrors = qs('#subcaErrors'),

    $precio = qs('#inputPrice'),
    $precioErrors = qs('#inputPriceErrors'),

    $descuento = qs('#inputDiscount'),
    $descuentoErrors = qs('#inputDiscountErrors'),
    
    $cuotas = qs('#inputCuotes'),
    $cuotasErrors = qs('#inputCuotesErrors'),
    
    $imagen = qs('#inputImage'),
    $imagenErrors = qs('#inputImageErrors'),

    
    $descripcion = qs('#validationTextarea'),
    $descripcionErrors = qs('#validationTextareaErrors'),

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
            case $name.value.length <4 :
            $nameErrors.innerHTML = 'Debes ingresar al menos 4 caracteres';
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

$brand.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$brand.value.trim():
           $brandErrors.innerHTML = 'El campo marca es obligatoria';
           $name.classList.add('is-invalid');
           validationsErrors = true
           break;
           case $brand.value.length <4 :
           $brandErrors.innerHTML = 'Debes ingresar al menos 4 caracteres';
           $brand.classList.add('is-invalid');
           validationsErrors = true
           break;
       case !regExAlpha.test($brand.value):
           $brandErrors.innerHTML = 'Ingrese una marca válida';
           $brand.classList.add('is-invalid');
           validationsErrors = true
           break
       default:
           $brand.classList.remove('is-invalid');
           $brand.classList.add('is-valid');
           $brandErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$category.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case $category.value.trim().length == 0 :
           $categoryErrors.innerHTML = 'La categoria es obligatoria';
           $category.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $category.classList.remove('is-invalid');
           $category.classList.add('is-valid');
           $categoryErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$subcategory.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case $subcategory.value.trim().length == 0 :
           $subcategoryErrors.innerHTML = 'La subcategoria es obligatoria';
           $subcategory.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $subcategory.classList.remove('is-invalid');
           $subcategory.classList.add('is-valid');
           $subcategoryErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$precio.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$precio.value.trim():
           $precioErrors.innerHTML = 'El campo precio es obligatorio';
           $precio.classList.add('is-invalid');
           validationsErrors = true
           break;
       case $precio.value.length <2 :
           $precioErrors.innerHTML = 'Debes ingresar al menos 2 caracteres';
           $precio.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $precio.classList.remove('is-invalid');
           $precio.classList.add('is-valid');
           $precioErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$descuento.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$descuento.value.trim():
           $descuentoErrors.innerHTML = 'El descuento es obligatorio';
           $descuento.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $descuento.classList.remove('is-invalid');
           $descuento.classList.add('is-valid');
           $descuentoErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$cuotas.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$cuotas.value.trim():
           $cuotasErrors.innerHTML = 'El campo cuota es obligatorio';
           $cuotas.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $cuotas.classList.remove('is-invalid');
           $cuotas.classList.add('is-valid');
           $cuotasErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})


$imagen.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$imagen.value.trim():
           $imagenErrors.innerHTML = 'Debe ingresar una imagen';
           $imagen.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $imagen.classList.remove('is-invalid');
           $imagen.classList.add('is-valid');
           $imagenErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

$descripcion.addEventListener('blur', function(e) {
    console.log(e)
   switch (true) {
       case !$descripcion.value.trim():
           $descripcionErrors.innerHTML = 'La descripción es obligatorio';
           $descripcion.classList.add('is-invalid');
           validationsErrors = true
           break;
           case $descripcion.value.length <20 :
           $descripcionErrors.innerHTML = 'Debes ingresar al menos 20 caracteres';
           $descripcion.classList.add('is-invalid');
           validationsErrors = true
           break;
       default:
           $descripcion.classList.remove('is-invalid');
           $descripcion.classList.add('is-valid');
           $descripcionErrors.innerHTML = "";
           validationsErrors = false;
           break;
   }
})

})