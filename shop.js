<script type="module">
  import { db, collection, getDocs } from "./firebase-config.js";

  const shopGrid = document.getElementById("shop-grid");

  async function loadProducts() {
    const snap = await getDocs(collection(db, "products"));
    const products = [];
    snap.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
    renderProducts(products);
  }

  function renderProducts(products) {
    shopGrid.innerHTML = "";
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      imgElement.src = "hoodie.jpg"; 
        <h3>${p.name}</h3>
        <p>${p.description || ""}</p>
        <div class="price">$${Number(p.price).toFixed(2)}</div>
        <button data-id="${p.id}" class="add-to-cart">Add to Cart</button>
      `;
      shopGrid.appendChild(card);
    });
  }

  shopGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const id = e.target.dataset.id;
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const found = cart.find(i => i.productId === id);
      if (found) found.qty += 1;
      else cart.push({ productId: id, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart. Open Cart page to review.");
    }
  });

  loadProducts();
</script>
