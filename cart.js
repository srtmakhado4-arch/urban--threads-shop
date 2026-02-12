<script type="module">
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  async function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const items = [];
    for (const ci of cart) {
      // Fetch product data if you wire Firestore
      // Here we assume Firestore is wired; for a simple scaffold, use placeholder
      // Example using Firestore:
      // const prodSnap = await getDoc(doc(db, "products", ci.productId));
      // items.push({ productId: ci.productId, qty: ci.qty, ...prodSnap.data() });
      // For now, push a placeholder:
      items.push({ productId: ci.productId, name: "Product " + ci.productId, qty: ci.qty, price: 19.99 });
    }
    renderCart(items);
  }

  function renderCart(items) {
    cartContainer.innerHTML = "";
    let total = 0;
    items.forEach(it => {
      const row = document.createElement("div");
      row.className = "cart-row";
      const lineTotal = it.price * it.qty;
      total += lineTotal;
      row.innerHTML = `
        <span>${it.name}</span>
        <span>Qty: ${it.qty}</span>
        <span>$${lineTotal.toFixed(2)}</span>
        <button data-id="${it.productId}" class="remove-item">Remove</button>
      `;
      cartContainer.appendChild(row);
    });
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const id = e.target.dataset.id;
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const next = cart.filter(ci => ci.productId !== id);
      localStorage.setItem("cart", JSON.stringify(next));
      loadCart();
    }
  });

  loadCart();
</script>
