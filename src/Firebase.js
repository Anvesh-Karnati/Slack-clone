// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDrJasY_VcoC5dBOv2askmtso1BJtVr_yQ",
    authDomain: "slack-clone-project-26f5a.firebaseapp.com",
    projectId: "slack-clone-project-26f5a",
    storageBucket: "slack-clone-project-26f5a.appspot.com",
    messagingSenderId: "811771767677",
    appId: "1:811771767677:web:d56c24f7c455fcbddc7a14",
   
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider}
  export default db;
  