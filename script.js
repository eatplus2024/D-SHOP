document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: "$10", imagen: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Producto 2", precio: "$20", imagen: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Producto 3", precio: "$30", imagen: "https://via.placeholder.com/150" }
    ];

    const contenedorProductos = document.querySelector('.productos');

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

    // **Aplicando estilos directamente desde JavaScript**
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = "#f8f8f8";
    
    document.querySelector("header").style.cssText = `
        background-color: #ff6f61;
        color: white;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    `;

    document.querySelector(".hero").style.cssText = `
        margin-top: 60px;
        text-align: center;
        padding: 50px 20px;
        background-color: #ffccbc;
        transition: background-color 0.3s ease;
    `;

    document.querySelector(".hero button").style.cssText = `
        background-color: #ff6f61;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 5px;
        transition: transform 0.2s ease;
    `;

    document.querySelector(".hero button").addEventListener("mouseover", () => {
        document.querySelector(".hero button").style.transform = "scale(1.1)";
    });

    document.querySelector(".hero button").addEventListener("mouseout", () => {
        document.querySelector(".hero button").style.transform = "scale(1)";
    });

    // **Carrito de compras dinámico**
    const contadorCarrito = document.getElementById("contador-carrito");
    let carrito = 0;

    document.querySelectorAll(".btn-agregar").forEach(button => {
        button.addEventListener("click", () => {
            carrito++;
            contadorCarrito.textContent = carrito;
        });
    });
});
