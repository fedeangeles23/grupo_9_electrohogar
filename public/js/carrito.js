console.log('Carrito conectado')

const $ = (id) => document.getElementById(id);
const carrito = $('carrito');

console.log(carrito)
const getCarrito = async () => {
    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()
        console.log(result)
        if (result.ok) {
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
        const result = await response.json()

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
        let item = `  <div class="product-container">
                        <div class="product-section">

                            <div class="product">
                                <img src="/images/productsDB/${image}" alt="Moto G s60">
                            </div>

                            <div class="product-name">
                                <p>${name}</p>
                            </div>

                        </div>
                        <div class="units">
                            <div class="add-unit">
                                <select name="cantidad" id="cantidad">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <label for="add-product">x ${price}</label>
                            </div>

                        </div>

                        <div class="delet-product-t">
                            <i class="fas fa-trash-alt"></i>
                        </div>

                        <div class="delete-section">

                            <div class="delet-product">
                                <i class="fas fa-trash-alt"></i>
                            </div>

                        </div>

                    </div> 

        `
        carrito.innerHTML += item
    });
}

getCarrito();
