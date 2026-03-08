const firebaseConfig = {
    apiKey: "AIzaSyBmysOBqaSi-xflWOPw4mr_7rZrs1BHS0Q",
    authDomain: "vsm-lostradar.firebaseapp.com",
    projectId: "vsm-lostradar",
    storageBucket: "vsm-lostradar.firebasestorage.app",
    messagingSenderId: "274570363533",
    appId: "1:274570363533:web:0e23d25d625bf6ae4958c4"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();