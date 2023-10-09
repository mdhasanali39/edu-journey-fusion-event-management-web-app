import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success("Log out Successful");
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <nav className="">
      <ul className="flex gap-6 items-center text-white">
        {/* home  */}
        <li className="font-semibold text-[17px]">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-clr-red" : ""
            }
          >
            Home
          </NavLink>
        </li>
        {/* speakers  */}
        <li className="font-semibold text-[17px]">
          <NavLink
            to="/speakers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-clr-red" : ""
            }
          >
            Speakers
          </NavLink>
        </li>
        {/* speakers  */}
        <li className="font-semibold text-[17px]">
          <NavLink
            to="/specialTicket"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-clr-red" : ""
            }
          >
            Special-Ticket
          </NavLink>
        </li>

        {/* conditional */}
        {
          user ? (
          <li>
            <div 
            className="flex gap-5 items-center"
            >
              <h2>{user?.displayName}</h2>
              <div>
              <img className="w-7 h-7 object-cover rounded-full"
               src={user?.photoURL} />
              </div>
              <button
              onClick={handleLogOut}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-none"
                type="button"
              >
                LogOut
              </button>
            </div>
          </li>
        ) : (
          <li className="font-semibold text-[17px]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-clr-red" : ""
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
