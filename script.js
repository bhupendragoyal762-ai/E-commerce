// ==========================
// NOVAKART SCRIPT - Advanced Search & Complete DB
// ==========================

// --- COMPLETE PRODUCT DATABASE WITH PARTIAL SEARCH KEYWORDS ---
const globalDatabase = [
    // Grocery
    { id: "rice", name: "Premium Basmati Rice", category: "Grocery", price: "₹899", img: "rice2.jpg", keywords: "rice basmati chawal grain" },
    { id: "salt", name: "Tata Salt", category: "Grocery", price: "₹25", img: "salt.jpg", keywords: "salt tata namak sodium" },
    { id: "sugar", name: "Pure White Sugar", category: "Grocery", price: "₹45", img: "images_grocery.JPEG", keywords: "sugar chini sweet" },
    { id: "tea", name: "Premium Assam Tea", category: "Grocery", price: "₹250", img: "images_grocery.JPEG", keywords: "tea chai assam leaf" },
    { id: "atta", name: "Whole Wheat Atta", category: "Grocery", price: "₹350", img: "images_grocery.JPEG", keywords: "atta wheat flour flour" },
    { id: "oil", name: "Mustard Oil 1L", category: "Grocery", price: "₹160", img: "images_grocery.JPEG", keywords: "oil mustard cooking sarso tel" },
    { id: "masala", name: "Garam Masala", category: "Grocery", price: "₹80", img: "images_grocery.JPEG", keywords: "masala spices garam powder" },
    { id: "biscuits", name: "Digestive Biscuits", category: "Grocery", price: "₹50", img: "images_grocery.JPEG", keywords: "biscuits cookies snack" },
    { id: "bhujia", name: "Royal Aloo Bhujia Namkeen", category: "Grocery", price: "₹120", img: "aalu bhujiya.png", keywords: "namkeen bhujia snack aloo sev" },
    { id: "coldrink", name: "Refresh Cold Drink", category: "Grocery", price: "₹60", img: "coldrink.jpg", keywords: "cold drink coca cola pepsi sprite dew fanta slice maaza limca thumbs up" },
    { id: "soap", name: "Herbal Bath Soap", category: "Grocery", price: "₹40", img: "beauty.JPG", keywords: "soap bath wash" },
    { id: "shampoo", name: "Vatika Hair Shampoo", category: "Grocery", price: "₹249", img: "image_shampoo.jpeg", keywords: "shampoo hair care wash" },

    // Mobiles
    { id: "iphone", name: "iPhone 17 Pro", category: "Mobiles", price: "₹1,29,999", img: "apple17.jpg", keywords: "iphone apple phone mobile ios iph" },
    { id: "samsung", name: "Samsung Galaxy S24", category: "Mobiles", price: "₹89,999", img: "samsang.jpg", keywords: "samsung galaxy mobile phone android" },
    { id: "pixel", name: "Google Pixel 10 Pro XL", category: "Mobiles", price: "₹99,999", img: "pixle.jpg", keywords: "pixel google phone mobile android" },
    { id: "vivo", name: "Vivo X100 Pro", category: "Mobiles", price: "₹74,999", img: "vivo.jpg", keywords: "vivo phone mobile android" },
    { id: "oppo", name: "Oppo Find X7", category: "Mobiles", price: "₹69,999", img: "oppo.jpg", keywords: "oppo phone mobile android" },
    { id: "realme", name: "Realme GT 5", category: "Mobiles", price: "₹45,999", img: "realme.jpg", keywords: "realme phone mobile android" },

    // Laptops
    { id: "hp", name: "HP Professional Laptop", category: "Laptops", price: "₹45,000", img: "hp.jpg", keywords: "hp laptop computer pc windows" },
    { id: "lenovo", name: "Lenovo LOQ Gaming", category: "Laptops", price: "₹65,000", img: "lenvo.jpg", keywords: "lenovo laptop gaming pc computer" },
    { id: "dell", name: "Dell XPS 15", category: "Laptops", price: "₹1,15,000", img: "dell.jpg", keywords: "dell laptop pc computer windows" },
    { id: "asus", name: "Asus ROG Zephyrus", category: "Laptops", price: "₹1,25,000", img: "asus.jpg", keywords: "asus rog gaming laptop pc computer" },
    { id: "acer", name: "Acer Predator Helios", category: "Laptops", price: "₹1,10,000", img: "acer.jpg", keywords: "acer predator laptop gaming pc computer" },

    // Women Fashion
    { id: "saree", name: "Designer Silk Saree", category: "Women Fashion", price: "₹2,499", img: "images_fashion.JPEG", keywords: "saree sari silk women traditional biba w libas zara" },
    { id: "kurti", name: "Cotton Printed Kurti", category: "Women Fashion", price: "₹799", img: "images_fashion.JPEG", keywords: "kurti kurta women ethnic top global desi" },
    { id: "blouse", name: "Readymade Blouse", category: "Women Fashion", price: "₹599", img: "images_fashion.JPEG", keywords: "blouse women top" },
    { id: "lehenga", name: "Bridal Lehenga", category: "Women Fashion", price: "₹5,999", img: "images_fashion.JPEG", keywords: "lehenga bridal women ethnic" },
    { id: "handbag", name: "Leather Handbag", category: "Women Fashion", price: "₹1,299", img: "images_fashion.JPEG", keywords: "handbag bag women purse leather" },
    { id: "heels", name: "Party Wear Heels", category: "Women Fashion", price: "₹999", img: "images_fashion.JPEG", keywords: "heels sandals shoes women" },
    { id: "jewellery", name: "Gold Plated Jewellery Set", category: "Women Fashion", price: "₹1,499", img: "images_fashion.JPEG", keywords: "jewellery necklace earrings ring women" },
    { id: "makeup", name: "Complete Makeup Kit", category: "Women Fashion", price: "₹1,999", img: "beauty.JPG", keywords: "makeup cosmetics beauty kit lipstick" },

    // Men Fashion
    { id: "shirt", name: "Men's Classic Shirt", category: "Men Fashion", price: "₹699", img: "shirt.JPG", keywords: "shirt men formal casual peter england louis philippe" },
    { id: "tshirt", name: "Polo T-Shirt", category: "Men Fashion", price: "₹499", img: "images_fashion.JPEG", keywords: "tshirt polo tee men casual levi's nike" },
    { id: "jeans", name: "Slim Fit Jeans", category: "Men Fashion", price: "₹1,299", img: "images_fashion.JPEG", keywords: "jeans denim pants men levi's" },
    { id: "jacket", name: "Winter Jacket", category: "Men Fashion", price: "₹1,999", img: "images_fashion.JPEG", keywords: "jacket winter coat men" },
    { id: "menshoes", name: "Sports Running Shoes", category: "Men Fashion", price: "₹1,599", img: "shoes2.JPG", keywords: "shoes running sports men sneakers nike adidas" },
    { id: "wallet", name: "Genuine Leather Wallet", category: "Men Fashion", price: "₹499", img: "images_fashion.JPEG", keywords: "wallet purse men leather" },
    { id: "belt", name: "Classic Leather Belt", category: "Men Fashion", price: "₹399", img: "images_fashion.JPEG", keywords: "belt men leather" },

    // Beauty
    { id: "facewash", name: "Skin Glow Face Wash", category: "Beauty", price: "₹135", img: "facewash.JPG", keywords: "face wash facewash skin glow beauty" },
    { id: "cream", name: "Nivea Soft Cream", category: "Beauty", price: "₹199", img: "cream.jpg", keywords: "cream face nivea soft skin beauty crm cre" },
    { id: "hairoil", name: "Vatika Hair Oil", category: "Beauty", price: "₹150", img: "oil.jpg", keywords: "hair oil vatika beauty" },
    { id: "perfume", name: "Luxury Perfume", category: "Beauty", price: "₹899", img: "beauty.JPG", keywords: "perfume scent fragrance beauty" },
    { id: "lipstick", name: "Matte Lipstick", category: "Beauty", price: "₹299", img: "beauty.JPG", keywords: "lipstick lips makeup beauty" },
    { id: "bodylotion", name: "Moisturizing Body Lotion", category: "Beauty", price: "₹350", img: "beauty.JPG", keywords: "body lotion moisturizer beauty skin" },
    { id: "faceserum", name: "Vitamin C Face Serum", category: "Beauty", price: "₹499", img: "beauty.JPG", keywords: "face serum vitamin c beauty skin" },
    { id: "facemask", name: "Charcoal Face Mask", category: "Beauty", price: "₹199", img: "beauty.JPG", keywords: "face mask charcoal beauty skin" },

    // Electronics / Watches
    { id: "earbuds", name: "Wireless Earbuds Pro", category: "Electronics", price: "₹899", img: "earbuds.jpg", keywords: "earbuds wireless audio bluetooth sound" },
    { id: "powerbank", name: "20000mAh Power Bank", category: "Electronics", price: "₹999", img: "powerbank.jpg", keywords: "power bank charger battery portable" },
    { id: "watch", name: "Premium Smart Watch X9", category: "Watches", price: "₹1,499", img: "images_smartwatch.jpeg", keywords: "watch smart watch smartwatch clock" },
    { id: "headphones", name: "Gaming Headphones", category: "Electronics", price: "₹1,799", img: "images_headphone.JPEG", keywords: "headphones gaming headset audio" },
    { id: "tablet", name: "Android Tablet 10 inch", category: "Electronics", price: "₹14,999", img: "images_mobile.JPEG", keywords: "tablet android tab pad" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountText = document.querySelector(".cart-count");

function updateCartCount() {
    let count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    if(cartCountText) cartCountText.innerHTML = `Cart (${count})`;
}
updateCartCount();

function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Add to Cart Logic
function addToCartObj(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if(existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} Added to Cart!`);
}

function directBuy(name, price, image) {
    addToCartObj(name, price, image);
    window.location.href = "cart.html";
}

// Global Advanced Partial Search
function performGlobalSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    
    let query = searchInput.value.toLowerCase().trim();
    if(query === "") return;

    // Search algorithm matches name, category, or ANY keyword (supports partial typing like 'crm' for cream)
    const results = globalDatabase.filter(p => {
        return p.name.toLowerCase().includes(query) || 
               p.category.toLowerCase().includes(query) || 
               p.keywords.toLowerCase().includes(query);
    });

    renderDynamicProducts(results, `Search Results for "${query}"`);
}

document.getElementById("searchInput")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performGlobalSearch();
});

// Category Click Action
document.querySelectorAll(".category").forEach(cat => {
    cat.addEventListener("click", () => {
        let catName = cat.dataset.category;
        const results = globalDatabase.filter(p => p.category === catName);
        renderDynamicProducts(results, `${catName} Products`);
    });
});

// Render Dynamic Grid
function renderDynamicProducts(products, titleText) {
    document.getElementById("defaultFrontPage").style.display = "none";
    const resultsSection = document.getElementById("dynamicResultsSection");
    const resultsGrid = document.getElementById("dynamicResultsGrid");
    
    document.getElementById("dynamicResultsTitle").innerText = titleText;
    resultsSection.style.display = "block";
    resultsGrid.innerHTML = "";

    if(products.length === 0) {
        resultsGrid.innerHTML = "<p style='grid-column:1/-1; text-align:center; font-size:18px;'>No products found matching your search.</p>";
        return;
    }

    products.forEach(p => {
        resultsGrid.innerHTML += `
            <div class="product-card">
                <a href="product-details.html?item=${p.id}"><img src="${p.img}" loading="lazy" alt="${p.name}"></a>
                <div class="product-info">
                    <a href="product-details.html?item=${p.id}"><h3>${p.name}</h3></a>
                    <div class="rating">⭐⭐⭐⭐☆</div>
                    <h4>${p.price}</h4>
                </div>
                <div class="product-buttons">
                    <button class="cart-btn" onclick="window.location.href='product-details.html?item=${p.id}'">View Details</button>
                    <button class="buy-btn" onclick="directBuy('${p.name}', '${p.price}', '${p.img}')">Buy Now</button>
                </div>
            </div>`;
    });
    
    resultsSection.scrollIntoView({ behavior: "smooth" });
}

// Timers & Scroll
const flashTimer = document.getElementById("flashTimer");
let hours = 10, minutes = 59, seconds = 59;
if(flashTimer) {
    setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 10; } 
        flashTimer.innerHTML = `Ends In: ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => { topBtn.style.display = window.scrollY > 300 ? "block" : "none"; });
topBtn?.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });

document.getElementById("heroShopBtn")?.addEventListener("click", () => {
    document.getElementById("shopSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("subscribeBtn")?.addEventListener("click", () => {
    const emailInput = document.getElementById("newsletterEmail");
    if (emailInput.value.trim() === "") { showToast("Please enter a valid email."); } 
    else { showToast("Thanks for subscribing!"); emailInput.value = ""; }
});
document.getElementById("wishlistBtn")?.addEventListener("click", () => { showToast("Added to Wishlist"); });

// Slider
const heroImages = ["banner1.JPG", "banner2.JPG", "banner3.JPG", "banner4.JPG"];
const heroImage = document.getElementById("heroImage");
let currentBanner = 0;
if(heroImage) {
    setInterval(() => {
        heroImage.style.opacity = "0";
        setTimeout(() => {
            currentBanner = (currentBanner + 1) % heroImages.length;
            heroImage.src = heroImages[currentBanner];
            heroImage.style.opacity = "1";
        }, 800); 
    }, 4000);
}