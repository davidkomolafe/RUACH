import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjGtXHCRccuvF6s5_5Y9SEM8ot78DXkt8",
  authDomain: "ruach-7.firebaseapp.com",
  projectId: "ruach-7",
  storageBucket: "ruach-7.appspot.com",
  messagingSenderId: "908350846226",
  appId: "1:908350846226:web:71f91093494dfbb292efcb",
  measurementId: "G-KVTL914T07",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const storageRef = ref(storage);
const analytics = getAnalytics(app);

const firestore = getFirestore();

const specialDay = doc(firestore, "dailySpecial/song");
function writeSong() {
  const docData = {
    description: "A delightful song",
    price: 3.89,
  };
  setDoc(specialDay, docData);
}

writeSong();

export const firebaseAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { app, storage, analytics };
