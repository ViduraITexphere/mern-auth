import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("could not login with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="btn btn-primary bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
    >
      Countinue with Google
    </button>
  );
}

export default OAuth;
