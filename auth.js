<script type="module">
  import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "./firebase-config.js";

  export async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  export async function signOutUser() {
    return signOut(auth);
  }

  export function onAuthStateChanged(cb) {
    return import("./firebase-config.js").then(m => m.onAuthStateChanged(cb));
  }
</script>
