import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

/**
 * In order for our App to be initlised, we need to insure that our APIKeys are available in our .env file in development
 */
if (process.env.NODE_ENV === "development") {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectID: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderID: process.env.REACT_APP_MESSAGINGSENDERID,
    appID: process.env.REACT_APP_APPID,
  });
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  return <div>Hello World</div>;
}

export default App;
