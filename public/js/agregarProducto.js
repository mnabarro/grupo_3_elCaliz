window.onload = function() {
    let botonAgregar = document.getElementById('agregar');
    
    botonAgregar.addEventListener('click', function(e){
        e.preventDefault();
        //capturamos la URL del producto
        let url = window.location.href.split("/");
        
        let id = url [url.length -1]

        
        let imagen = document.querySelector('.fondo-imagen img').getAttribute("src")
        let tituloProd = document.getElementById('nombre').innerText
        let precio = document.getElementById('precio').innerText
        let descuento = document.getElementById('discount').innerText
        let inputCantidad = document.getElementById('quantity').value

        let producto = {
            idProducto: id, 
            imagen,
            tituloProd,
            precio:parseFloat(precio),
            descuento: parseFloat(descuento),
            inputCantidad: parseFloat(inputCantidad)
        }

        console.log(producto);
        
        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio * producto.inputCantidad)
        } else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }

            

            let totalCarrito = 0
            for (let i=0; i<carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)
        }
        alert('Agregaste' + " " + tituloProd + " al carrito")
    })
}