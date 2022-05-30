// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYr8DfGnRT61qFInWosfca4z4bmtLjc2I",
    authDomain: "ryanism-web.firebaseapp.com",
    projectId: "ryanism-web",
    storageBucket: "ryanism-web.appspot.com",
    messagingSenderId: "786332374744",
    appId: "1:786332374744:web:776deba77bac636c15e9ad",
    measurementId: "G-LMC59WM1B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);