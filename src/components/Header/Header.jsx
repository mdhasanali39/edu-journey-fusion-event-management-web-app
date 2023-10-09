import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const Header = () => {

  const location = useLocation();
  console.log(location);
  return (
    <header className={`${location.pathname === '/' ? 'bg-overlay bg-opacity-60' : ''} bg-bottom bg-cover bg-blend-overlay py-4 px-6`}>
      <div className="flex justify-between">
        {/* logo  */}
        <div className="font-bold text-xl text-white">
          <Link to={"/"}>
            <h2>EduJourneyFusion</h2>
          </Link>
        </div>
        <Navbar></Navbar>
      </div>
      {
        location.pathname === '/' && <Banner></Banner>
      }
      
    </header>
  );
};

export default Header;
