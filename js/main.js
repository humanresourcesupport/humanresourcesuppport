/**
 * hrsdesign - Professional Website Logic
 * Handles animations, navigation, and order processing
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    // This makes elements "fade in" as you scroll down the page
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => scrollObserver.observe(el));


    // 2. MOBILE MENU TOGGLE
    // Handles the bars/hamburger menu for phone users
    window.toggleMobileMenu = () => {
        const menu = document.getElementById("mobileMenu");
        if (menu.classList.contains("w3-show")) {
            menu.classList.remove("w3-show");
        } else {
            menu.classList.add("w3-show");
        }
    };


    // 3. PRODUCT IMAGE MODAL
    // Opens a full-screen view when a user clicks a product photo
    window.openImage = (src) => {
        const modal = document.getElementById("imgModal");
        const modalImg = document.getElementById("modalImg");
        if (modal && modalImg) {
            modalImg.src = src;
            modal.style.display = "block";
        }
    };


    // 4. SMART ORDER LOGIC
    // When a user clicks 'Buy Now', it auto-fills the form and scrolls down
    window.setProductWithPrice = (name, price) => {
        const productSelect = document.getElementById("orderProduct");
        const priceInput = document.getElementById("orderPrice");
        const totalInput = document.getElementById("orderTotal");

        if (productSelect) productSelect.value = name;
        if (priceInput) priceInput.value = "Price: ₹" + price;
        if (totalInput) totalInput.value = "Total Amount: ₹" + price;

        // Smooth scroll to the order section
        document.getElementById("order").scrollIntoView({ behavior: 'smooth' });
    };


    // 5. FORM SUCCESS FEEDBACK
    // Shows a message before the user's email client opens
    const orderForm = document.querySelector('form');
    if (orderForm) {
        orderForm.addEventListener('submit', () => {
            const msg = document.getElementById("successMessage");
            if (msg) {
                msg.style.display = "block";
                setTimeout(() => { msg.style.display = "none"; }, 5000);
            }
        });
    }

});

// 6. LOGO CONSOLE BRANDING
console.log("%chrsdesign", "color: white; background: black; padding: 5px 10px; font-weight: bold; border-radius: 3px;");
console.log("Status: One-Man Army Operational");
