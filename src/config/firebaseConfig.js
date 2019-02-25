 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDIBw5nkirnoRDro8r95xm-YLrarYvInPg",
     authDomain: "hello-react-a5d0c.firebaseapp.com",
     databaseURL: "https://hello-react-a5d0c.firebaseio.com",
     projectId: "hello-react-a5d0c",
     storageBucket: "hello-react-a5d0c.appspot.com",
     messagingSenderId: "581534352133"
 };
 firebase.initializeApp(config);
 //  firebase.firestore().settings({
 //      timestampsInSnapshots: true
 //  })

 export default firebase;