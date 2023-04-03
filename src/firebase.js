
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpoMR1q53uaGIlxBvj_4p9jP3kOHEk87M",
  authDomain: "whatsapp-clone-e38bc.firebaseapp.com",
  projectId: "whatsapp-clone-e38bc",
  storageBucket: "whatsapp-clone-e38bc.appspot.com",
  messagingSenderId: "468597006108",
  appId: "1:468597006108:web:f6cb44b07e4c7aafd024d9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db} 