import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDTifUEkJirTuMoebWwAw77e9sHSEvSUjw",
//   authDomain: "cortextest2-3b48b.firebaseapp.com",
//   databaseURL: "https://cortextest2-3b48b.firebaseio.com",
//   projectId: "cortextest2-3b48b",
//   storageBucket: "cortextest2-3b48b.appspot.com",
//   messagingSenderId: "195734822136",
//   appId: "1:195734822136:web:2102a40b843727bbeeef0d"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs1iWwHgKRc6DEEzrtF9D1wyZ6lPr5tTE",
  authDomain: "cortex---2020.firebaseapp.com",
  databaseURL: "https://cortex---2020.firebaseio.com",
  projectId: "cortex---2020",
  storageBucket: "cortex---2020.appspot.com",
  messagingSenderId: "594647375800",
  appId: "1:594647375800:web:65d974b4f4d7135955f94d"
};

// Initialize Firebase
!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app().firestore();

const database = firebase.firestore();
const storage = firebase.storage();

const backend = {
  database,
  storage
};

export default backend;
