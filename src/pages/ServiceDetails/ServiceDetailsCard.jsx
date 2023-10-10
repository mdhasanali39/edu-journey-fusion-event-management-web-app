import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const ServiceDetailsCard = ({ selectedService }) => {
  const { name, image, price, full_description } = selectedService;

  return (
    <div className="relative flex w-3/4 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700">
      <div className="relative m-0   shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 transition ease-linear duration-200 hover:text-clr-red antialiased">
          {name}
        </h4>
        <p className="mb-2 block text-base font-normal leading-relaxed text-gray-700 antialiased">
          {full_description}
        </p>
        <p className="mb-8 block text-xl font-semibold leading-relaxed text-clr-red antialiased">
          Price: {price}
        </p>
        
        {/* more details  */}
        <div className="my-5">
          {/* start  */}
          <div className="border-b w-1/4 pb-2">
            <h4 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Start:
            </h4>
            <p>November 10 @ 1:00 am</p>
          </div>
          {/* end  */}
          <div className="border-b w-1/4 pb-2 my-4">
            <h4 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              End:
            </h4>
            <p>November 13 @ 1:00 am</p>
          </div>
          {/* location  */}
          <div className="w-1/4 pb-2">
            <h4 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Location:
            </h4>
            <p>p/c dhaka 1212, road n: 3, pillar n: 190</p>
          </div>
        </div>
        {/* get ticket button */}
        <button
          onClick={() => toast.success('You successfully purchase the ticket')}
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-bold text-sm uppercase bg-custom-red text-white transition ease-linear duration-300 border hover:bg-white hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Get Ticket
        </button>
      </div>
    </div>
  );
};

ServiceDetailsCard.propTypes = {
  selectedService: PropTypes.object.isRequired,
}

export default ServiceDetailsCard;
