// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7nf_4KGAWWx0MNPb29kXvVrYabkmvRP4',
  authDomain: 'twitter-clone-f35f8.firebaseapp.com',
  projectId: 'twitter-clone-f35f8',
  storageBucket: 'twitter-clone-f35f8.appspot.com',
  messagingSenderId: '534128049554',
  appId: '1:534128049554:web:9dbb28ec21ce70479d154b',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import {  } from 'firebase/database';

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
