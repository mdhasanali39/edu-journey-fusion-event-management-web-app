import { Link } from "react-router-dom";
import notFoundImg from "/page-not-found.svg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img className="w-2/4 h-2/4" src={notFoundImg} />
      <h2 className="text-5xl text-clr-red font-bold">Page not found</h2>

      <Link to={'/'}>
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 mt-7 text-center align-middle font-bold text-sm uppercase bg-gray-700 text-white transition ease-linear duration-300 border hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
