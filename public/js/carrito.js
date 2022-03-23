console.log('Carrito conectado')

const getCarrito = async () => {
    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()

        if (ok) {
            console.log(result)
        }
    } catch (error) {
        console.error(error)
    }
}

getCarrito()