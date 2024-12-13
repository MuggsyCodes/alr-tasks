import { useAuth } from "@/context/AuthContext";
import { FaGoogle } from "react-icons/fa6";

// error function
const SignInGoogle = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button className="btn" onClick={signInWithGoogle}>
      <FaGoogle />
      Sign in
    </button>
  );
};

export default SignInGoogle;