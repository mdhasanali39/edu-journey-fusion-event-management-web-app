import Aos from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
Aos.init()

const Banner = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div
      className={`${
        location.pathname === "/speakers"
          ? "min-h-[64vh]"
          : location.pathname === "/specialTicket"
          ? "min-h-[64vh]"
          : "min-h-[92vh]"
      } flex justify-center items-center`}
    >
      <div className="text-white space-y-5 text-center">
        <h2 data-aos="zoom-in-up" className="text-7xl font-bold">
          {location.pathname === "/speakers" ? (
            <p>
              Meet <span className="text-clr-red">With</span>
            </p>
          ) : location.pathname === "/specialTicket" ? (
            <div>
              <h2>Speacial Ticket</h2>
              <p className="text-2xl my-3">Let's Get your Speacial Ticket</p>
              <p className="text-2xl text-clr-red">Speacial people are get Speacial gift</p>
            </div>
          ) : (
            "Good Education only"
          )}
        </h2>
        <h4 data-aos="zoom-in-up" data-aos-duration="3000" className="text-3xl font-bold">
          {location.pathname === "/speakers"
            ? "Our Expert Speakers"
            : 
            location.pathname === "/specialTicket" ? 
            ''
            :
            "Is The Backbone Of A Nation"}
        </h4>
      </div>
    </div>
  );
};

export default Banner;
