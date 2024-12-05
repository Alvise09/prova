const firebaseConfig = {
  apiKey: "AIzaSyCSK6ACbpBq_O--x0vgYOYhKYGdE7ySMdI",
  authDomain: "hfarmai-8bdf5.firebaseapp.com",
  projectId: "hfarmai-8bdf5",
  storageBucket: "hfarmai-8bdf5.firebasestorage.app",
  messagingSenderId: "791164269090",
  appId: "1:791164269090:web:486de7149aa406ead2507b",
  measurementId: "G-3536PC715E"
};


// Inizializza l'app Firebase
firebase.initializeApp(firebaseConfig);

// Inizializza l'autenticazione
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Aggiungi l'evento di click al pulsante
document.getElementById("googleSignIn").addEventListener("click", () => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`Benvenuto, ${user.displayName}!`);
    })
    .catch((error) => {
      console.error("Errore durante il login:", error.message);
      alert("Errore durante il login. Riprova");
    });
});