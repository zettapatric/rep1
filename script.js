// JavaScript for Cart Management
let cart = [];

const addToCartButtons = document.querySelectorAll(".product-card button");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

// Update Cart UI
function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p><strong>${item.name}</strong> - ${item.price}</p>
    `;
    cartItemsContainer.appendChild(div);
  });
  cartCount.textContent = cart.length;
}

// Add Item to Cart
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.parentElement;
    const productName = productCard.querySelector("h3").innerText;
    const productPrice = productCard.querySelector("p").innerText;

    cart.push({ name: productName, price: productPrice });
    updateCartUI();
    alert(`${productName} has been added to your cart.`);
  });
});

// Toggle Cart Modal
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");

cartToggle.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});

cartClose.addEventListener("click", () => {
  cartModal.classList.remove("show");
});

// Hero Section Text Rotation (Slideshow)
const heroTexts = [
  "Explore the latest fashion trends",
  "Be bold, be stylish, be you",
  "New arrivals every week!"
];

let heroIndex = 0;
const heroParagraph = document.querySelector(".hero p");

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroTexts.length;
  heroParagraph.textContent = heroTexts[heroIndex];
}, 4000);

// Cart Modal Management (Optional)
// Close cart modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove("show");
  }
});
