let cart = [];

// Fungsi untuk menampilkan halaman yang sesuai
function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    document.getElementById(page).style.display = 'block';
    
    if (page === 'cart') {
        updateCart();
    } else if (page === 'checkout') {
        updateCheckout();
    }
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    alert(`${name} telah ditambahkan ke keranjang.`);
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - Rp ${item.price} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });
    
    totalPrice.textContent = total;
}

// Fungsi untuk memperbarui total checkout
function updateCheckout() {
    const checkoutTotal = document.getElementById('checkout-total');
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    checkoutTotal.textContent = total;
}
