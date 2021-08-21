import firebase from "firebase/app";

/**
 * Represents sign in functionality for the app. Has been decoupled to keep functionality
 * more tidy.
 * @param {firebase.auth.Auth} auth represents the authentication passed through props
 */
export function SignIn({ auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (auth) {
      auth.signInWithPopup(provider);
    }
  };

  return (
    <>
      <button id="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

/**
 * Represents sign out functionality for the app. Has been decoupled to keep functionality
 * more tidy.
 * @param {firebase.auth.Auth} auth represents the authentication passed through props
 */
export function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
