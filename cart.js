// ==========================
// NOVAKART CART MODULE
// Senior Frontend Optimized
// ==========================

// Initialize cart and ensure quantity property exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = cart.map(item => ({ ...item, quantity: item.quantity || 1 }));

// DOM Elements
const cartItems = document.getElementById("cartItems");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

/**
 * Main render function for the cart
 */
function displayCart() {
    cartItems.innerHTML = "";
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty">
                <i class="fa-solid fa-basket-shopping" style="font-size: 48px; color: #ccc; margin-bottom: 15px; display: block;"></i>
                Your Cart is Empty
            </div>`;
        updateSummary(0, 0);
        return;
    }

    let totalCost = 0;
    let totalQty = 0;

    const fragment = document.createDocumentFragment();

    cart.forEach((item, index) => {
        // Safe parsing for prices with commas (e.g., ₹1,500)
        let price = parseInt(String(item.price).replace(/[^\d]/g, ""), 10);
        let itemTotal = price * item.quantity;
        
        totalCost += itemTotal;
        totalQty += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image || 'placeholder.jpg'}" alt="${item.name}" loading="lazy">
            <div class="info">
                <h3>${item.name}</h3>
                <p>₹${price.toLocaleString('en-IN')}</p>
                <div class="qty-box">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i> Remove
            </button>
        `;
        fragment.appendChild(div);
    });

    cartItems.appendChild(fragment);
    updateSummary(totalQty, totalCost);
    saveCart();
}

/**
 * Updates the summary UI
 */
function updateSummary(qty, cost) {
    totalItems.innerHTML = `Items: <strong>${qty}</strong>`;
    totalPrice.innerHTML = `Total: <strong>₹${cost.toLocaleString('en-IN')}</strong>`;
}

/**
 * Handles quantity increment and decrement
 */
function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        // If quantity drops below 1, prompt for removal
        if(confirm("Remove this item from the cart?")) {
            removeItem(index);
            return;
        }
    }
    displayCart();
}

/**
 * Removes item completely from the cart
 */
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

/**
 * Syncs current state to localStorage
 */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ==========================
// EVENT LISTENERS
// ==========================

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    // Simple Checkout Mockup functionality
    const total = totalPrice.innerText.split(': ')[1];
    const confirmed = confirm(`Proceed to payment? Your total is ${total}.`);
    
    if(confirmed) {
        alert("Payment successful! Redirecting to order confirmation...");
        cart = [];
        saveCart();
        displayCart();
        // window.location.href = 'checkout.html'; // Un-comment if you add the checkout page
    }
});

// Initial Render
document.addEventListener("DOMContentLoaded", displayCart);