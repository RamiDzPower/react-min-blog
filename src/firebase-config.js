import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBIX9HEpRFpn4IH7fN1RaZqTZgEsoREAgI",

  authDomain: "blog-app-sertis.firebaseapp.com",

  projectId: "blog-app-sertis",

  storageBucket: "blog-app-sertis.appspot.com",

  messagingSenderId: "664374981337",

  appId: "1:664374981337:web:b99fdaf1d2516b8154c4c8"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export { auth, storage, db, googleProvider };
