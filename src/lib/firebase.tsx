import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import 'firebase/storage';

const apikey = process.env.API_KEY;

const firebaseConfig = {
    apiKey: apikey,
    authDomain: "blog-code-e3137.firebaseapp.com",
    projectId: "blog-code-e3137",
    storageBucket: "blog-code-e3137.appspot.com",
    messagingSenderId: "165342424544",
    appId: "1:165342424544:web:be77af36bce5849ed44f85",
    measurementId: "G-EM85XNF92R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore ();
// export const storage = firebase.storage();