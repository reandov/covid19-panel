import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARAjzGIsOP6rk4MEBdBmGRd9K1YAA7HIg",
  authDomain: "covid19br-dashboard.firebaseapp.com",
  databaseURL: "https://covid19br-dashboard-default-rtdb.firebaseio.com",
  projectId: "covid19br-dashboard",
  storageBucket: "covid19br-dashboard.appspot.com",
  messagingSenderId: "1024834188542",
  appId: "1:1024834188542:web:edb9a82cf81376273021af",
  measurementId: "G-VK52LZ0NFX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
export { db };
export default firebase;
