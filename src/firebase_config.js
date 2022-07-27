import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyArmqrZDCxImMZXsssbeHwZMBPEf_u93kk",
    authDomain: "fir-tut-1c930.firebaseapp.com",
    projectId: "fir-tut-1c930",
    storageBucket: "fir-tut-1c930.appspot.com",
    messagingSenderId: "694490625949",
    appId: "1:694490625949:web:1102e81106dba1187fe174",
    measurementId: "G-2NGT61JBSD"
  };

  const app = initializeApp(firebaseConfig) 
  export const db = getFirestore(app)