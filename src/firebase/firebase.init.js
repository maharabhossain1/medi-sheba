import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInitaApp = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitaApp;
