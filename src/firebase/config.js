import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAXQe26F1hV4yNwTTDlY8Nlr2WXfjwAlTw",
  authDomain: "eshop-89681.firebaseapp.com",
  projectId: "eshop-89681",
  storageBucket: "eshop-89681.appspot.com",
  messagingSenderId: "8853815720",
  appId: "1:8853815720:web:a16c4760d1da7b7dc39d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app