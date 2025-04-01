document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: "$10", imagen: "https://static.wixstatic.com/media/a4f6c8_f9c96ee36ee747a2a8e8da2d1ec9b0a1~mv2.png/v1/fill/w_198,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Turitaxis.png" },
        { id: 2, nombre: "Producto 2", precio: "$20", imagen: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Producto 3", precio: "$30", imagen: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Producto 4", precio: "$40", imagen: "https://via.placeholder.com/150" },
        { id: 5, nombre: "Producto 5", precio: "$50", imagen: "https://via.placeholder.com/150" },
        { id: 6, nombre: "Producto 6", precio: "$60", imagen: "https://via.placeholder.com/150" }
    ];

    const contenedorProductos = document.querySelector('.productos');

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button>Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
});
