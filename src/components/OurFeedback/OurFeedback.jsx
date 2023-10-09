import wavBg_1 from "../../assets/wave_1.png";
import wavBg_2 from "../../assets/wave_2.png";
import clientImg_1 from "../../assets/client_1.jpg";
import clientImg_2 from "../../assets/client_2.jpg";
import clientImg_3 from "../../assets/client_3.jpg";
import { FaFacebook, FaLinkedin, FaQuoteLeft, FaTwitter } from "react-icons/fa6";
import "aos/dist/aos.css";
import Aos from "aos";

 Aos.init({duration:1000});


const OurFeedback = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-4xl text-center font-bold mb-10">Our Feedback</h2>
      <div className="grid gap-6 content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* feedback one  */}
        <div data-aos="fade-up" data-aos-duration="1000"
          className="border relative pt-10">
          <span className="absolute top-[5%] left-[3%] text-2xl text-clr-red"
          ><FaQuoteLeft/></span>
          <p className="px-7 py-5 mb-4">
          Clients give good feedback when they get good support. So you should try to give the best support, then the chances of getting better feedback from the clients will be higher. we should try our best.
          </p>
          <div className="bg-white rounded-full p-1 border absolute bottom-[27%] left-1/2 -translate-x-1/2">
            <img
              className="w-16 h-16 rounded-full object-cover object-top"
              src={clientImg_1}
            />
          </div>
          <div className="flex flex-col items-center absolute bottom-[8%] left-1/2 -translate-x-1/2">
            <h4 
            className="text-lg text-white font-semibold mb-3"
            >Jhon Tom</h4>
            <div className="flex gap-4 text-clr-red text-lg">
              <span className="cursor-pointer">
                <FaFacebook />
              </span>
              <span className="cursor-pointer">
                <FaTwitter />
              </span>
              <span className="cursor-pointer">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="-mb-[2.5px]">
            <img className="h-[170px] w-full" src={wavBg_1} />
          </div>
        </div>
        {/* feedback two  */}
        <div data-aos="fade-up" data-aos-duration="3000"
         className="border relative pt-10">
          <span className="absolute top-[5%] left-[3%] text-2xl text-clr-red"
          ><FaQuoteLeft/></span>
          <p className="px-7 py-5 mb-4">
          Clients give good feedback when they get good support. So you should try to give the best support, then the chances of getting better feedback from the clients will be higher. we should try our best.
          </p>
          <div className="bg-white rounded-full p-1 border absolute bottom-[27%] left-1/2 -translate-x-1/2">
            <img
              className="w-16 h-16 rounded-full object-cover object-top"
              src={clientImg_2}
            />
          </div>
          <div className="flex flex-col items-center absolute bottom-[8%] left-1/2 -translate-x-1/2">
            <h4 
            className="text-lg text-white font-semibold mb-3"
            >Jhon Doe</h4>
            <div className="flex gap-4 text-clr-blue] text-lg">
              <span className="cursor-pointer">
                <FaFacebook />
              </span>
              <span className="cursor-pointer">
                <FaTwitter />
              </span>
              <span className="cursor-pointer">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="-mb-[2.5px]">
            <img className="h-[170px] w-full" src={wavBg_2} />
          </div>
        </div>
        {/* feedback three  */}
        <div data-aos="fade-up" data-aos-duration="4000"
         className="border relative pt-10">
          <span className="absolute top-[5%] left-[3%] text-2xl text-clr-red"
          ><FaQuoteLeft/></span>
          <p className="px-7 py-5 mb-4">
          Clients give good feedback when they get good support. So you should try to give the best support, then the chances of getting better feedback from the clients will be higher. we should try our best.
          </p>
          <div className="bg-white rounded-full p-1 border absolute bottom-[27%] left-1/2 -translate-x-1/2">
            <img
              className="w-16 h-16 rounded-full object-cover object-top"
              src={clientImg_3}
            />
          </div>
          <div className="flex flex-col items-center absolute bottom-[8%] left-1/2 -translate-x-1/2">
            <h4 
            className="text-lg text-white font-semibold mb-3"
            >Jhon Smith</h4>
            <div className="flex gap-4 text-clr-red text-lg">
              <span className="cursor-pointer">
                <FaFacebook />
              </span>
              <span className="cursor-pointer">
                <FaTwitter />
              </span>
              <span className="cursor-pointer">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="-mb-[2.5px]">
            <img className="h-[170px] w-full" src={wavBg_1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeedback;
