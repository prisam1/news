import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7YiHHJJj0BCg2_LLmcfSjrvY33o0ABe4",
      authDomain: "news-88c8e.firebaseapp.com",
      projectId: "news-88c8e",
      storageBucket: "news-88c8e.appspot.com",
      messagingSenderId: "789397493384",
      appId: "1:789397493384:web:ccc5b9b6a6304e8b67b13d",
      measurementId: "G-XYPP0WN3XG"
}

 
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { auth }