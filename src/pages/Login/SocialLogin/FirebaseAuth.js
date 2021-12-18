import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBv_YfM5TMOm7Hwy1fDQRc6u5zwATeVFzY',
  authDomain: 'nanoom-79ae3.firebaseapp.com',
  projectId: 'nanoom-79ae3',
  storageBucket: 'nanoom-79ae3.appspot.com',
  messagingSenderId: '777288174619',
  appId: '1:777288174619:web:0e85a1ee9a2cc32518fcbe',
  measurementId: 'G-DFBLYJ9VRJ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
