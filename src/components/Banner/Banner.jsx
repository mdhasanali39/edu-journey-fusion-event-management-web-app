import Aos from "aos";
import { Link, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
Aos.init();

const Banner = () => {
  const location = useLocation();

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
        <div data-aos="zoom-in-up" className="text-7xl font-bold">
          {location.pathname === "/speakers" ? (
            <p>
              Meet <span className="text-clr-red">With</span>
            </p>
          ) : location.pathname === "/specialTicket" ? (
            <div>
              <h2>Speacial Ticket</h2>
              <p
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="text-2xl my-3"
              >
                Let's Get your Speacial Ticket
              </p>
              <p
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="text-2xl text-clr-red"
              >
                Speacial people are get Speacial gift
              </p>
            </div>
          ) : (
            <span>Good Education only</span>
          )}
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="text-3xl font-bold"
        >
          {location.pathname === "/speakers" ? (
            "Our Expert Speakers"
          ) : location.pathname === "/specialTicket" ? (
            ""
          ) : (
            <div>
              <p>Is The Backbone Of A Nation</p>
              <Link to={'/register'}>
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 mt-6 text-center align-middle font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border border-clr-red hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto"
                  type="button"
                >
                  Register Now <FaArrowRightLong/>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
