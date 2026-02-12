<script type="module">
  // firebase-config.js
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore, doc, getDoc, setDoc, collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // helper to expose to modules
  function _onAuthStateChanged(cb) { return onAuthStateChanged(auth, cb); }

  export { app, auth, db, _onAuthStateChanged as onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, collection, getDocs, doc, getDoc, setDoc, addDoc, query, where };
</script>
