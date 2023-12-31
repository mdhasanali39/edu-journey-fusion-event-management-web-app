import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types';

Aos.init();

const ServicesCard = ({ service }) => {
  const { id,name, image, price, short_description } = service || {}


  return (
    <div data-aos="flip-left" className="relative flex w-full max-w-[48rem] flex-col lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-full lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 transition ease-linear duration-200 hover:text-clr-red antialiased">
          {name}
        </h4>
        <p className="mb-2 block text-base font-normal leading-relaxed text-gray-700 antialiased">
          {short_description}
        </p>
        <p className="mb-8 block text-base font-semibold leading-relaxed text-clr-red antialiased">
          {price}
        </p>
        <Link to={`/service/${id}`} className="inline-block">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-sm font-bold uppercase text-clr-red transition ease-linear duration-300 border border-clr-red hover:bg-custom-red hover:text-white active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            See Details <FaArrowRightLong/>
          </button>
        </Link>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
}

export default ServicesCard;
