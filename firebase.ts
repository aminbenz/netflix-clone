// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBW19nKX6JBhWeGcOVrwk98esxRR_I62Jw',
  authDomain: 'netflix-clone-b7f99.firebaseapp.com',
  projectId: 'netflix-clone-b7f99',
  storageBucket: 'netflix-clone-b7f99.appspot.com',
  messagingSenderId: '477896904811',
  appId: '1:477896904811:web:df3030983c9d1698eee12e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
