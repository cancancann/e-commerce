// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjpjHaodJndBC0RO6Epsjn7fQMJkLG06Q",
  authDomain: "shop-a9563.firebaseapp.com",
  projectId: "shop-a9563",
  storageBucket: "shop-a9563.appspot.com",
  messagingSenderId: "408018090754",
  appId: "1:408018090754:web:baaceb969ebc1fd87b201b",
  measurementId: "G-Y2KRK5H6ZE",
};
//for you firebase api key 

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
