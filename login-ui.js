<script type="module">
  import { signup, login } from "./auth.js";

  document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.elements["email"].value;
    const password = e.target.elements["password"].value;
    try {
      await signup(email, password);
      window.location.href = "shop.html";
    } catch (err) {
      alert(err.message);
    }
  });

  document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.elements["email"].value;
    const password = e.target.elements["password"].value;
    try {
      await login(email, password);
      window.location.href = "shop.html";
    } catch (err) {
      alert(err.message);
    }
  });
</script>
