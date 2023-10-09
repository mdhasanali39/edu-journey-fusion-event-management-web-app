import { FaCheck } from "react-icons/fa6";

const SpecialTicket = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] px-6 py-12">
      <div>
        <h2>Speacial Ticket</h2>
        <p>Let's Get your Speacial Ticket</p>
        <p>Speacial people are get Speacial gift</p>
      </div>
      <div className="relative flex w-3/4 flex-col rounded-xl bg-custom-blue bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
        <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
          <p className="block  text-sm font-normal uppercase leading-normal text-white antialiased">
            Vip Passes
          </p>
          <h1 className="mt-6 flex justify-center gap-1 text-7xl font-normal tracking-normal text-white antialiased">
            <span className="mt-2 text-4xl font-bold">$</span>120
          </h1>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheck />
              </span>
              <p className="block  text-base font-normal leading-relaxed text-inherit antialiased">
                Gain exclusive access to premium sessions and workshops
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheck />
              </span>
              <p className="block  text-base font-normal leading-relaxed text-inherit antialiased">
                Reserved seating in the front rows for all keynote speeches
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheck />
              </span>
              <p className="block  text-base font-normal leading-relaxed text-inherit antialiased">
                Priority registration and check-in for a hassle-free experience.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheck />
              </span>
              <p className="block  text-base font-normal leading-relaxed text-inherit antialiased">
                Access to a private networking lounge with industry leaders and
                speakers
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheck />
              </span>
              <p className="block  text-base font-normal leading-relaxed text-inherit antialiased">
                Customized event swag bag with exclusive goodies
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-12 p-0 absolute top-[0%] right-[2%]">
          <button
            className="flex select-none gap-2 rounded-lg py-3 px-6 text-center align-middle font-bold text-xl uppercase bg-none text-white transition ease-linear duration-200 border border-blue-500 hover:border-clr-red hover:text-clr-red active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            type="button"
          >
            Get Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialTicket;
