import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD7OVmNstpVenZanXnb2ejbvtuyD7NJko",
  authDomain: "foodie-site.firebaseapp.com",
  projectId: "foodie-site",
  storageBucket: "foodie-site.appspot.com",
  messagingSenderId: "261873802373",
  appId: "1:261873802373:web:a7391e7fc7e713c5b41dec",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
