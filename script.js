// script.js

// Función para filtrar productos por nombre
function filtrarProductos() {
    const input = document.querySelector('.search-bar input');
    const filtro = input.value.toLowerCase();
    const productos = document.querySelectorAll('.product-card');

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('h3').textContent.toLowerCase();
        if (nombreProducto.includes(filtro)) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Función para resaltar categorías
function resaltarCategoria(event) {
    const categorias = document.querySelectorAll('.category-item');
    categorias.forEach(categoria => categoria.style.backgroundColor = '#007bff');

    const categoriaSeleccionada = event.target;
    categoriaSeleccionada.style.backgroundColor = '#ff6f61';
}

// Carrito de compras básico
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    const totalElemento = document.getElementById('total');

    carritoElemento.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoElemento.appendChild(li);
        total += item.precio;
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

// Asignar eventos
document.addEventListener('DOMContentLoaded', () => {
    // Evento para la barra de búsqueda
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', filtrarProductos);

    // Eventos para las categorías
    const categorias = document.querySelectorAll('.category-item');
    categorias.forEach(categoria => {
        categoria.addEventListener('click', resaltarCategoria);
    });

    // Eventos para agregar productos al carrito
    const botonesAgregar = document.querySelectorAll('.product-card button');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const card = boton.closest('.product-card');
            const nombre = card.querySelector('h3').textContent;
            const precioTexto = card.querySelector('p').textContent;
            const precio = parseFloat(precioTexto.replace('$', ''));
            agregarAlCarrito(nombre, precio);
        });
    });
});
