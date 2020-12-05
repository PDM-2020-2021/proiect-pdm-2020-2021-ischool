import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

var firebaseConfig = {
   apiKey: "AIzaSyCHbGmnwlgPtkunmmoMapDYO9EOOFbK0Fc",
   authDomain: "ischool-rxo.firebaseapp.com",
   databaseURL: "https://ischool-rxo.firebaseio.com",
   projectId: "ischool-rxo",
   storageBucket: "ischool-rxo.appspot.com",
   messagingSenderId: "1063961768464",
   appId: "1:1063961768464:android:c6837c9f478e3893c11095"
 };
if(!firebase.apps.length)
  {firebase.initializeApp(firebaseConfig);}


  export {firebase};
