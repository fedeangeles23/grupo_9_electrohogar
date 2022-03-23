console.log('Carrito conectado')

const $ = (id) => document.getElementById(id);

const carrito = $('carrito');

const getCarrito = async () => {
    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()

        if (ok) {
            cargarTabla(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}


const addItem = async (id) => {

    try {
        const response = await fetch(`/api/cart/${id}`, {
            method: 'POST'
        })
        const result = await response.send(result)



        if (result.ok) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.log(error)
    }


}

const cargarTabla = (data) => {

    carrito.innerHTML = null;

    data.forEach(({
        amount,
        image,
        name,
        price,
        total
    }) => {
        let item = `
         <div class = "box1" id='carrito'>
             <div class = "product-container">
             <div class = "product-section">
             <div class = "product">
             < img src = "/images/productsDB/${image}" > < /div>
             <div class = "product-name">
             <p> ${name}</p></div>

             </div> 
             <div class = "units">


             <div class = "add-unit">

                      <label for = "add-product" > x ${amount} < /label>

             <label for = "add-product" > x ${price} < /label>
              <label for = "add-product" > x ${total} < /label> </div>
        
             </div>

             <div class = "delet-product-t" >
             <i class = "fas fa-trash-alt" > < /i> </div>

             <div class = "delete-section" >



             <div class = "delet-product" >
             <i class = "fas fa-trash-alt" > < /i> </div>

             </div>

             </div>
            </div>
        `
        carrito.innerHTML + item
    });
}

getCarrito();
