

const carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  const carritoTotal = document.getElementById('carrito-total');
  carritoLista.innerHTML = '';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    carritoLista.appendChild(li);
  });

  carritoTotal.textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    
    finalizarCompraBtn.addEventListener('click', function () {
      const confirmacion = confirm('¿Deseas finalizar la compra?');
      
      if (confirmacion) {
        alert('¡Compra finalizada con éxito!');
        // Puedes resetear el carrito aquí si lo deseas
        carrito.length = 0;
        total = 0;
        actualizarCarrito();
      } else {
        alert('Compra cancelada.');
      }
    });
  });