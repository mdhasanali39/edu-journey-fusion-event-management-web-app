import { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlEnvolope } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // sign in User
    signIn(email, password)
      .then(() => {
        toast.success("log in Successful");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-login-credentials") {
          toast.error("email or password does not match");
        }
      });
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Sign in with google Successful");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-[80vh]">
    <div className="flex justify-center items-center my-20 ">
      <div className="bg-custom-blue pt-12 p-7 text-white w-1/2">
        <h2 className="text-4xl font-bold mb-10 text-center">Please Login</h2>
        {/* easy sign in  */}
        <div>
          <h4 className="text-center text-xl font-semibold mb-5">
            Easy <span className="text-clr-red">sign</span> in with
          </h4>
          <div className="flex gap-3 justify-center mb-6">
            <span
              onClick={handleGoogleLogin}
              className="text-2xl border rounded-full p-1 bg-white text-clr-red cursor-pointer"
            >
              <FaGoogle />
            </span>
            <span className="text-2xl border rounded-full p-1 bg-white text-clr-red cursor-pointer">
              <FaFacebookF />
            </span>
          </div>
          {/* separator ----or---- */}
          <div className="flex gap-3 justify-center items-center mb-4">
            <span className="w-20 h-[2px] bg-custom-red"></span>
            <span className="text-xl font-semibold">Or</span>
            <span className="w-20 h-[2px] bg-custom-red"></span>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-1 text-clr-red text-2xl">
              <SlEnvolope />
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="border outline-none text-black pl-8
            w-full pr-3 py-3
            "
            />
          </div>
          <div className="flex relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-1 text-clr-red text-2xl">
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              name="password"
              required
              placeholder="Your Password"
              className="border outline-none text-black pl-8
            w-full pr-3 py-3
            "
            />
          </div>
          {/* terms services  */}
          <div className="my-4">
            <label htmlFor="terms">
              <input type="checkbox" id="terms" className="mr-3" />
              Remember Me
            </label>
          </div>

          <button
            className="flex select-none justify-center items-center gap-2 rounded-lg py-3 px-6 text-right font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-none w-full"
            type="submit"
          >
            Login
          </button>
        </form>
        {/* dont have an account  */}
        <p className="mt-4 text-center">
          {" "}
          Don't have an account?
          <Link to={"/register"}>
            <span className="text-blue-400 font-semibold ml-2">Register</span>
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
