// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAB6evBBE8d3GeGA8WkZ85aClBJVidEPfc',
  authDomain: 'aim2024-ce1bb.firebaseapp.com',
  projectId: 'aim2024-ce1bb',
  storageBucket: 'aim2024-ce1bb.appspot.com',
  messagingSenderId: '706349342794',
  appId: '1:706349342794:web:9bba215591710d953d86b3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const storage = getStorage(app)
