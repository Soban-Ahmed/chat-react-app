import firebase from "firebase/app";

function SignIn({ auth }) {
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

export default SignIn;
