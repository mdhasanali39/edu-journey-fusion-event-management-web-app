import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import toast from "react-hot-toast";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out Successful");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className={`relative flex justify-between py-4 px-6 lg:px-12 `}>
      {/* logo  */}
      <div className="font-bold text-2xl text-white">
        <Link to={"/"}>
          <h2>EduJourneyFusion</h2>
        </Link>
      </div>

      <ul className="flex gap-6 items-center">
        <li>
          <div className={`
          ${ 
            isMenuClicked ? 'w-[98%] space-y-3 absolute z-30 top-[75%] left-[1%]  bg-custom-blue text-center px-5 py-8 border-2' 
          : 'hidden'}
            transition ease-linear duration-300 lg:flex gap-6 items-center text-white`}>
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
            {/* special ticket  */}
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
          </div>
        </li>

        {/* conditional */}
        {user ? (
          <li>
            <div className="relative">
              <div onClick={() => setIsClicked(!isClicked)}>
                <img
                  className="w-7 h-7 object-cover rounded-full"
                  src={user?.photoURL}
                />
              </div>
              <div
                className={`absolute ${
                  isClicked ? "opacity-100" : "opacity-0 pointer-events-none"
                } z-50 right-0 bg-white p-7 whitespace-nowrap border rounded-md transition ease-in-out duration-500`}
              >
                <h2 className="text-clr-red font-semibold">
                  {user?.displayName}
                </h2>
                <button
                  onClick={handleLogOut}
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 mt-4 text-center align-middle font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border hover:bg-blue-500 hover:border-clr-red hover:text-white active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-none"
                  type="button"
                >
                  LogOut
                </button>
              </div>
            </div>
          </li>
        ) : (
          <li className="font-semibold text-[17px] text-white">
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
        {/* menu bar icon  */}
        <span 
        onClick={()=> setIsMenuClicked(!isMenuClicked)}
        className="text-2xl text-white lg:hidden">
          <RiMenuFill />
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
