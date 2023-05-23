import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFz1cI_MYB1EXnnyTPAKX0AmFYj3yhdEA",
  authDomain: "fir-course-3c801.firebaseapp.com",
  projectId: "fir-course-3c801",
  storageBucket: "fir-course-3c801.appspot.com",
  messagingSenderId: "442365215470",
  appId: "1:442365215470:web:ff03a26340cd0b772969ff",
  measurementId: "G-VMKMNNKRN6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
