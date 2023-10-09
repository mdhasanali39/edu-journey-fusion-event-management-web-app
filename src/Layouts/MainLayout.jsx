import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayout = () => {

  const location = useLocation()

  return (
    <div className="font-Roboto relative">
      <div className={`${ 
        location.pathname === '/speakers' ? 'bg-overlay-speakers bg-top' 
      : location.pathname === '/specialTicket' ? 'bg-overlay-special' 
      : location.pathname === '/' ? 'bg-overlay' : 'bg-custom-blue'} bg-bottom bg-cover bg-blend-overlay`}>
      <Navbar></Navbar>
      {
        location.pathname === '/' || location.pathname === '/speakers' || location.pathname === '/specialTicket' ?  <Banner></Banner> : ''
      }
      
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
