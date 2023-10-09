import { FaGoogle, FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { SlEnvolope } from "react-icons/sl";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate, googleSignIn } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const imgUrl = form.get('photo')

    console.log(imgUrl);
    // if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
    //   toast.error(
    //     "Password should at least 6 characters, one capital letter and one special character"
    //   );
    //   return;
    // }

    if (password.length < 6) {
      toast.error("Password should at least 6 characters");
      return;
    }
     if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("Password should at least one capital letter");
      return;
    }
     if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("Password should at least one special character");
      return;
    }
    console.log("pass");
    // createUser
    createUser(email, password)
      .then(() => {
        profileUpdate(name, imgUrl)
          .then(() => {
            // console.log("profile updated");
          })
          .catch((err) => {
            console.error(err);
          });
        toast.success("Your Account created Successful");
        // console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.message.split("/")[1].slice(0, -2));
        // console.error(err);
      });

    // console.log(name, email, password);
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Sign in with google Successful");
        console.log(result.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center my-20 min-h-[80vh]">
      <div className="bg-custom-blue pt-12 p-7 text-white w-1/2">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Please Register
        </h2>
        {/* easy sign in  */}
        <div>
          <h4 className="text-center text-xl font-semibold mb-5">
            Easy <span className="text-clr-red">sign</span> in with
          </h4>
          <div className="flex gap-3 justify-center mb-6">
            {/* google sign in */}
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
          {/* separator  */}
          <div className="flex gap-3 justify-center items-center mb-4">
            <span className="w-20 h-[2px] bg-custom-red"></span>
            <span className="text-xl font-semibold">Or</span>
            <span className="w-20 h-[2px] bg-custom-red"></span>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-1 text-clr-red text-2xl">
              <BsFillPersonFill />
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="border outline-none text-black pl-8
            w-full pr-3 py-3
            "
            />
          </div>
          <div className="flex relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-1 text-clr-red text-2xl">
              <FaLink />
            </span>
            <input
              type="url"
              name="photo"
              required
              placeholder="Photo Url"
              className="border outline-none text-black pl-8
            w-full pr-3 py-3
            "
            />
          </div>
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
              Accept our{" "}
              <span className="text-blue-400 cursor-pointer hover:underline ">
                terms
              </span>{" "}
              and{" "}
              <span className="text-blue-400 cursor-pointer hover:underline ">
                services
              </span>
            </label>
          </div>

          <button
            className="flex select-none justify-center items-center gap-2 rounded-lg py-3 px-6 text-right font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-none w-full"
            type="submit"
          >
            Register
          </button>
        </form>
        {/* already have an account  */}
        <p className="mt-4 text-center">
          {" "}
          Already have an account?
          <Link to={"/login"}>
            <span className="text-blue-400 font-semibold ml-2">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
