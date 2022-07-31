import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCWaGEjhe5toGjPqNVATc1GVvrEHAIeJjk",
  authDomain: "hifun-3f503.firebaseapp.com",
  databaseURL: "https://hifun-3f503-default-rtdb.firebaseio.com",
  projectId: "hifun-3f503",
  storageBucket: "hifun-3f503.appspot.com",
  messagingSenderId: "259550998848",
  appId: "1:259550998848:web:ecba8617a2128fe9088aa5"
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
