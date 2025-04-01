document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Producto 1", price: 10 },
        { id: 2, name: "Producto 2", price: 20 },
        { id: 3, name: "Producto 3", price: 30 }
    ];

    const productList = document.getElementById("product-list");
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    let cart = [];

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al carrito</button>
            `;
            productList.appendChild(productElement);
        });
    }

    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        cart.push(product);
        updateCart();
    };

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
        cartCount.textContent = cart.length;
    }

    cartBtn.addEventListener("click", () => {
        cartModal.classList.remove("hidden");
    });

    closeCart.addEventListener("click", () => {
        cartModal.classList.add("hidden");
    });

    renderProducts();
});
