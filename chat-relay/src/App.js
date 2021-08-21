import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { SignIn, SignOut } from "./components/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

/**
 * In order for our App to be initlised, we need to insure that our APIKeys are available in our .env file in development
 */
if (process.env.NODE_ENV === "development") {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
  });
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  const [isLoggedIn] = useAuthState(auth);
  return (
    <div className="app">
      <header>
        <h1>Sign In</h1>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <SignOut auth={auth} />
      </header>
      {isLoggedIn ? <span>User logged in</span> : <SignIn auth={auth} />}
    </div>
  );
}

export default App;
