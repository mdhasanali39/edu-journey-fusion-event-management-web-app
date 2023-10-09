import sponsorImg_1 from "../../assets/sponsor_one.gif";
import sponsorImg_2 from "../../assets/sponsor_two.gif";
import sponsorImg_3 from "../../assets/sponsor_three.jpg";
import sponsorImg_4 from "../../assets/sponsor_four.gif";
import sponsorImg_5 from "../../assets/sponsor_five.gif";
import sponsorImg_6 from "../../assets/sponsor_six.gif";
import sponsorImg_7 from "../../assets/sponsor_seven.gif";
import sponsorImg_8 from "../../assets/sponsor_eight.gif";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const OurSponsors = () => {
  return (
    <div className="my-14">
      <h2 className="text-4xl text-center font-bold mb-10">Our Sponsors</h2>
      <div className="flex gap-5 flex-wrap justify-center">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_1}
          alt="sponsor one image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_2}
          alt="sponsor tow image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_3}
          alt="sponsor three image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_4}
          alt="sponsor four image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_5}
          alt="sponsor five image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_6}
          alt="sponsor six image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_7}
          alt="sponsor seven image"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border p-2"
          src={sponsorImg_8}
          alt="sponsor eight image"
        />
      </div>
    </div>
  );
};

export default OurSponsors;
