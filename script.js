document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: "Zapatos deportivos", precio: "$50", imagen: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Camiseta negra", precio: "$20", imagen: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Reloj elegante", precio: "$80", imagen: "https://via.placeholder.com/150" }
    ];

    const contenedorProductos = document.querySelector('.productos');
    const contadorCarrito = document.getElementById("contador-carrito");
    let carrito = 0;

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button class="btn-agregar">Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });

    document.querySelectorAll(".btn-agregar").forEach(button => {
        button.addEventListener("click", () => {
            carrito++;
            contadorCarrito.textContent = carrito;
        });
    });

    // Animación del botón de ofertas
    const botonOfertas = document.getElementById("ver-ofertas");
    botonOfertas.addEventListener("mouseover", () => {
        botonOfertas.style.transform = "scale(1.1)";
    });

    botonOfertas.addEventListener("mouseout", () => {
        botonOfertas.style.transform = "scale(1)";
    });
});
