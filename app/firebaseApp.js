import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../config/firebaseApp.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export {firebase}
