/* =====================================================
   MAIN JAVASCRIPT FILE
   Clean, lightweight, SEO-safe
===================================================== */

/* -----------------------------
   DOM READY
----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initMobileMenu();
  initImageModal();
});

/* -----------------------------
   SCROLL FADE-IN ANIMATION
   (Improves UX, no SEO impact)
----------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  if (!("IntersectionObserver" in window)) {
    // Fallback: show everything
    elements.forEach(el => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* -----------------------------
   MOBILE MENU TOGGLE
----------------------------- */
function initMobileMenu() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("w3-hide");
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("w3-hide");
    });
  });
}

/* -----------------------------
   IMAGE MODAL (SHOP)
----------------------------- */
function initImageModal() {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  if (!modal || !modalImg) return;

  document.querySelectorAll("[data-zoom-image]").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

/* -----------------------------
   ORDER FORM HELPERS
----------------------------- */
const PRODUCT_PRICES = {
  "UNIT 09 // CRUISE CTRL Tee": 999,
  "HRS Signature Tee": 899,
  "HRS Summer Drop": 1099
};

function setProductWithPrice(productName) {
  const productSelect = document.getElementById("orderProduct");
  const priceInput = document.getElementById("orderPrice");
  const totalInput = document.getElementById("orderTotal");

  if (!productSelect || !priceInput || !totalInput) return;

  const price = PRODUCT_PRICES[productName] || "";

  productSelect.value = productName;
  priceInput.value = price;
  totalInput.value = price ? "₹" + price : "";
}

/* -----------------------------
   ORDER SUCCESS MESSAGE
----------------------------- */
function showSuccessMessage() {
  const msg = document.getElementById("successMessage");
  if (msg) {
    msg.style.display = "block";
  }
}
