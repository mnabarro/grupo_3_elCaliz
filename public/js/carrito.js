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
        let product = carrito[i];
        let div = document.querySelector(".vacio");
        let content = 
        `<section class="cart">
          <article class="cart-item">
            <div class="cart-product-name">${product.tituloProd}</div>
            <div class="cart-item-inner">
              <div class="cart-product-img"><a href="/"><img src="${product.imagen}" alt=""> </div>
              <div class="unit-price class="price">$ ${toThousand(product.precio)}</div>
        </article>
        <article class="qty-selector>
            <div class="qty-minus"><i class="fas fa-minus-circle"></i></div>
            <form action="#" method="GET">
                <label for="cantidad"></label>
                <input id="quantity" value=${product.inputCantidad} type="text">
            </form>
            <div class="qty-plus"><i class="fas fa-plus-circle"></i></div>
            <form action="#" method="GET">
              <button class="trash" type="button">
                  <i onclick="borrarItem(${i})" class="fas fa-trash></i>
              </button>
            </form>
        </article>
    </section>`;
  
        div.innerHTML += content;
      }
    }
  
    let h3 = document.querySelector("#precioTotal")
    let totalCarrito = localStorage.totalCarrito
    if(typeof localStorage.totalCarrito == 'undefined'){
      let content2 = `0`
      h3.innerHTML += content2
    } else {
      let content2 = `${toThousand(totalCarrito)}`
      h3.innerHTML += content2
    }
  
    
  };
  
  function borrarItem(id) {
    let cart = JSON.parse(localStorage.cart);
    cart = cart.filter((product, i) => {
      return i !== id;
    });
  
    localStorage.setItem("cart", JSON.stringify(cart));
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
  