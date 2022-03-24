/*maru */
window.onload = function () {
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
    ) {
      let div = document.getElementById("vacio");
      div.innerHTML += "<h2>Tu carrito esta vacío </h2>";
    } else {
      let carrito = JSON.parse(localStorage.carrito);
      for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let div = document.querySelector(".vacio");
        let contenido = 
        `<section class="cart">
          <article class="cart-item">
            <div class="cart-product-name">${producto.tituloProd}</div>
            <div class="cart-item-inner">
              <div class="cart-product-img"><img src="${producto.imagen}" > </div>
              <div class="unit-price class="price">Precio ${toThousand(producto.precio)}</div>
              <div class="carrito">
                <button class="minus" onclick="menos()">-</button>
                <input type="text" value=${producto.inputCantidad} id="quantity">
                <button class="plus" onclick="mas()">+</button> 
              </div>
              <div class="unit-price class="price">Subtotal ${toThousand(producto.precio*producto.inputCantidad)}</div>
              <form method="GET">
                  <button  type="button">
                      <i onclick="borrarItem(${i})" class="fas fa-trash-alt"></i>
                  </button>
              </form>
          </div>
          </article>
    </section>`;
  
        div.innerHTML += contenido;
      }
    }
  
    let h3 = document.querySelector("#precioTotal")
    let totalCarrito = localStorage.totalCarrito
    if(typeof localStorage.totalCarrito == 'undefined'){
      let contenido2 = `0`
      h3.innerHTML += contenido2
    } else {
      let contenido2 = `${toThousand(totalCarrito)}`
      h3.innerHTML += contenido2
    }
  
    
  };
  
  function borrarItem(id) {
    let carrito = JSON.parse(localStorage.carrito);
    carrito = carrito.filter((producto, i) => {
      return i !== id;
    });
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  }
     
  let botonBorrar = document.querySelector("#botonBorrar");
  botonBorrar.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    alert('Tu carrito ha sido vaciado');
    location.reload();
  })
  let purchase = document.querySelector("#purchase");
  purchase.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Tu compra se ha procesado correctamente');
    location.reload();
  })
  