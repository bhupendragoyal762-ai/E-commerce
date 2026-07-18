// ==========================
// 1. EXACT IMAGE DATABASE (NO DUMMY IMAGES)
// ==========================
const productDatabase = {
    // GROCERY
    "rice": { name: "Premium Basmati Rice", category: "Grocery", price: "₹899", oldPrice: "₹1,200", desc: "Extra long premium quality basmati rice. 25kg packaging.", mainImage: "images_rice.jpeg", thumbnails: ["rice1.jpg", "rice2.jpg", "rice3.jpg"] },
    "salt": { name: "Tata Salt", category: "Grocery", price: "₹25", oldPrice: "₹30", desc: "Vacuum evaporated iodised salt for mental development.", mainImage: "salt.jpg", thumbnails: ["salt.jpg", "salt.jpg", "salt.jpg"] },
    "bhujia": { name: "Royal Aloo Bhujia Namkeen", category: "Grocery", price: "₹120", oldPrice: "₹150", desc: "Crispy and spicy potato sticks. Perfect tea-time snack.", mainImage: "aalu bhujiya.png", thumbnails: ["aalu bhujiya.png", "aalu bhujiya.png", "aalu bhujiya.png"] },
    "coldrink": { name: "Refresh Cold Drink", category: "Grocery", price: "₹60", oldPrice: "₹80", desc: "Ice-cold refreshing drinks, ready when you are.", mainImage: "coldrink.jpg", thumbnails: ["coldrink1.jpg", "coldrink2.jpg", "coldrink3.jpg"] },
    "sugar": { name: "Pure White Sugar", category: "Grocery", price: "₹45", oldPrice: "₹55", desc: "Premium refined pure white sugar.", mainImage: "images_grocery.JPEG", thumbnails: ["images_grocery.JPEG", "images_grocery.JPEG", "images_grocery.JPEG"] },
    "tea": { name: "Premium Assam Tea", category: "Grocery", price: "₹250", oldPrice: "₹300", desc: "Strong and refreshing Assam Tea.", mainImage: "images_grocery.JPEG", thumbnails: ["images_grocery.JPEG", "images_grocery.JPEG", "images_grocery.JPEG"] },
    "atta": { name: "Whole Wheat Atta", category: "Grocery", price: "₹350", oldPrice: "₹400", desc: "100% pure whole wheat atta.", mainImage: "images_grocery.JPEG", thumbnails: ["images_grocery.JPEG", "images_grocery.JPEG", "images_grocery.JPEG"] },
    "oil": { name: "Mustard Oil 1L", category: "Grocery", price: "₹160", oldPrice: "₹190", desc: "Pure and healthy mustard oil.", mainImage: "imgoil.jpg", thumbnails: ["oil1.jpg", "oil2.jpg", "oil3.jpg"] },
    "masala": { name: "Garam Masala", category: "Grocery", price: "₹80", oldPrice: "₹100", desc: "Authentic Indian Garam Masala.", mainImage: "images_grocery.JPEG", thumbnails: ["images_grocery.JPEG", "images_grocery.JPEG", "images_grocery.JPEG"] },
    "biscuits": { name: "Digestive Biscuits", category: "Grocery", price: "₹50", oldPrice: "₹65", desc: "Healthy and tasty digestive biscuits.", mainImage: "images_grocery.JPEG", thumbnails: ["images_grocery.JPEG", "images_grocery.JPEG", "images_grocery.JPEG"] },
    "soap": { name: "Herbal Bath Soap", category: "Grocery", price: "₹40", oldPrice: "₹50", desc: "Refreshing herbal bath soap.", mainImage: "beauty.JPG", thumbnails: ["beauty.JPG", "beauty.JPG", "beauty.JPG"] },

    // MOBILES
    "iphone": { name: "iPhone 17 Pro", category: "Mobiles", price: "₹1,29,999", oldPrice: "₹1,49,999", desc: "Flagship performance, Pro Camera, stunning design.", mainImage: "apple17.jpg", thumbnails: ["applethumb1.png", "applethumb2.png", "applethumb3.png"] },
    "pixel": { name: "Google Pixel 10 Pro XL", category: "Mobiles", price: "₹99,999", oldPrice: "₹1,15,000", desc: "Pro Camera system with Google AI built-in.", mainImage: "pixle.jpg", thumbnails: ["pixle1.jpg", "pixle2.jpg", "pixle3.jpg"] },
    "samsung": { name: "Samsung Galaxy S24", category: "Mobiles", price: "₹89,999", oldPrice: "₹99,999", desc: "Galaxy AI features with stunning display.", mainImage: "samsang.jpg", thumbnails: ["samsang1.jpg", "samsang2.jpg", "samsang3.jpg"] },
    "vivo": { name: "Vivo X100 Pro", category: "Mobiles", price: "₹74,999", oldPrice: "₹84,999", desc: "Zeiss camera system for perfect portraits.", mainImage: "vivo.jpg", thumbnails: ["vivo1.jpg", "vivo3.jpg", "vivo4.jpg"] },
    "oppo": { name: "Oppo Find X9 pro", category: "Mobiles", price: "₹69,999", oldPrice: "₹79,999", desc: "Premium design and fast charging.", mainImage: "oppo.jpg", thumbnails: ["oppo1.jpg", "oppo2.jpg", "oppo3.jpg"] },
    "realme": { name: "Realme GT 5", category: "Mobiles", price: "₹45,999", oldPrice: "₹55,999", desc: "Flagship killer with ultra-fast performance.", mainImage: "realme.jpg", thumbnails: ["realme1.jpg", "realme2.jpg", "realme3.jpg"] },

    // LAPTOPS
    "hp": { name: "HP Professional Laptop", category: "Laptops", price: "₹45,000", oldPrice: "₹55,000", desc: "High-performance laptop for work and everyday use.", mainImage: "hp.jpg", thumbnails: ["hp1.jpg", "hp2.jpg", "hp3.jpg"] },
    "lenovo": { name: "Lenovo LOQ Gaming Laptop", category: "Laptops", price: "₹65,000", oldPrice: "₹75,000", desc: "Powerful gaming and heavy productivity machine.", mainImage: "lenvo.jpg", thumbnails: ["lenvo1.jpg", "lenvo2.jpg", "lenvo3.jpg"] },
    "dell": { name: "Dell XPS 15", category: "Laptops", price: "₹1,15,000", oldPrice: "₹1,35,000", desc: "Premium build quality and 4K display.", mainImage: "dell.jpg", thumbnails: ["dell1.jpg", "dell2.jpg", "dell3.jpg"] },
    "asus": { name: "Asus ROG Zephyrus", category: "Laptops", price: "₹1,25,000", oldPrice: "₹1,45,000", desc: "Ultimate gaming performance.", mainImage: "asus.jpg", thumbnails: ["asus1.jpg", "asus2.jpg", "asus3.jpg"] },
    "acer": { name: "Acer Predator Helios", category: "Laptops", price: "₹1,10,000", oldPrice: "₹1,30,000", desc: "Heavy duty performance laptop.", mainImage: "acer.jpg", thumbnails: ["acer1.jpg", "acer2.jpg", "acer3.jpg"] },

    // ELECTRONICS / OTHERS
    "earbuds": { name: "Wireless Earbuds Pro", category: "Electronics", price: "₹899", oldPrice: "₹1,499", desc: "Bluetooth 5.4, Noise Cancelling Mic, Ultimate Comfort.", mainImage: "earbuds.png", thumbnails: ["earbuds1.jpg", "earbuds2.jpg", "earbuds3.jpg"] },
    "powerbank": { name: "20000mAh Power Bank", category: "Electronics", price: "₹999", oldPrice: "₹1,599", desc: "Fast charging power bank, can charge iPhone multiple times.", mainImage: "powerbank.jpg", thumbnails: ["powerbank.jpg", "powerbank.jpg", "powerbank.jpg"] },
    "watch": { name: "Premium Smart Watch X9", category: "Watches", price: "₹1,499", oldPrice: "₹2,999", desc: "Smart fitness tracker with heart rate monitor.", mainImage: "images_smartwatch.jpeg", thumbnails: ["images_smartwatch.jpeg", "watchthmb.jpg", "watchthumb2.jpg"] },
    
    // BEAUTY
    "facewash": { name: "Skin Glow Face Wash", category: "Beauty", price: "₹135", oldPrice: "₹199", desc: "Premium face wash for glowing and healthy skin.", mainImage: "facewash.jpg", thumbnails: ["facewash.jpg", "facewash.jpg", "facewash.jpg"] },
    "cream": { name: "Nivea Soft Cream", category: "Beauty", price: "₹199", oldPrice: "₹250", desc: "Refreshingly soft moisturizing cream with Jojoba oil.", mainImage: "cream.jpg", thumbnails: ["cream.jpg", "cream.jpg", "cream.jpg"] },
    "hairoil": { name: "Vatika Hair Oil", category: "Beauty", price: "₹150", oldPrice: "₹250", desc: "Nourishing hair oil for strong, healthy and shiny hair.", mainImage: "image_shampoo.jpeg", thumbnails: ["shampoo1.jpg", "shampoo.jpg", "shampoo.jpg"] },
	"Shampoo": { name: "Vatika Hair Shampoo", category: "Beauty", price: "₹249", oldPrice: "₹399", desc: "Olive multivitamin formula for strong hair.", mainImage: "shampoo.jpg", thumbnails: ["shampoo2.jpg", "shampoo3.jpg", "shampoo1.jpg"] }
};

// ==========================
// 2. DYNAMIC LOADER & RELATED
// ==========================
let currentCat = "";
let currentKey = "";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentKey = urlParams.get('item'); 

    if (currentKey && productDatabase[currentKey]) {
        const product = productDatabase[currentKey];
        currentCat = product.category;

        document.getElementById("main-product-image").src = product.mainImage;
        document.getElementById("thumb1").src = product.thumbnails[0];
        document.getElementById("thumb2").src = product.thumbnails[1];
        document.getElementById("thumb3").src = product.thumbnails[2];

        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-category").innerText = product.category;
        document.getElementById("product-price-current").innerText = product.price;
        document.getElementById("product-price-old").innerText = product.oldPrice;
        document.getElementById("product-desc").innerText = product.desc;
        
        loadRelatedProducts();
    } else {
        document.getElementById("product-name").innerText = "Product Not Found";
    }
});

function loadRelatedProducts() {
    const grid = document.getElementById("related-products-grid");
    if(!grid) return;
    
    let html = "";
    let count = 0;
    
    for (let key in productDatabase) {
        if (productDatabase[key].category === currentCat && key !== currentKey && count < 4) {
            let p = productDatabase[key];
            html += `
                <div class="product-card">
                    <a href="product-details.html?item=${key}"><img src="${p.mainImage}" loading="lazy" alt="${p.name}"></a>
                    <div class="product-info">
                        <a href="product-details.html?item=${key}"><h3>${p.name}</h3></a>
                        <div class="rating">⭐⭐⭐⭐☆</div>
                        <h4>${p.price}</h4>
                    </div>
                    <div class="product-buttons">
                        <button class="cart-btn" onclick="window.location.href='product-details.html?item=${key}'">View Details</button>
                    </div>
                </div>`;
            count++;
        }
    }
    grid.innerHTML = count === 0 ? "<p>No related products found.</p>" : html;
}

// ==========================
// 3. ZOOM EFFECT & THUMBNAIL CLICK
// ==========================
const zoomContainer = document.getElementById('zoom-container');
const img = document.getElementById('main-product-image');

if(zoomContainer && img) {
    zoomContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = 'scale(2.2)'; 
    });
    zoomContainer.addEventListener('mouseleave', () => {
        img.style.transformOrigin = 'center center';
        img.style.transform = 'scale(1)'; 
    });
}

function changeImage(src) {
    if(src && img) img.src = src;
}

// ==========================
// 4. QUANTITY & CART
// ==========================
function increaseQuantity() {
    let q = document.getElementById('product-quantity');
    if(q) q.value = parseInt(q.value) + 1;
}

function decreaseQuantity() {
    let q = document.getElementById('product-quantity');
    if (q && parseInt(q.value) > 1) q.value = parseInt(q.value) - 1;
}

function addToCart() {
    let quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    let name = document.getElementById('product-name').innerText;
    let price = document.getElementById('product-price-current').innerText;
    let image = document.getElementById('main-product-image').src;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === name);
    if(existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + quantity;
    } else {
        cart.push({ name, price, image, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Successfully added ${quantity} x '${name}' to Cart!`);
}

function buyNow() {
    addToCart();
    window.location.href = "cart.html";
}