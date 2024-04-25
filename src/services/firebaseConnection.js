import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkXb2UtZLNoFbGE_inGqZJ_JsiPTsU7kE",
  authDomain: "controle-estoque-fba4b.firebaseapp.com",
  projectId: "controle-estoque-fba4b",
  storageBucket: "controle-estoque-fba4b.appspot.com",
  messagingSenderId: "1068154972221",
  appId: "1:1068154972221:web:cf596733060c8525ff2254",
  measurementId: "G-V2JFKBF1PQ"
};

let app;

if(firebase.app.length){
  app = firebase.initializeApp(firebaseConfig);
}

export default app;
