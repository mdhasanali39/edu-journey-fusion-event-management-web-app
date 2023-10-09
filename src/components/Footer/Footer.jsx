import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  text-white bg-overlay-footer bg-top bg-cover bg-blend-overlay">
        <aside className="text-white">
            <p
            className="text-xl" 
            >Organized By</p>
          {/* logo  */}
          <div className="font-bold text-4xl ">
            <Link to={"/"}>
              <h2>EduJourneyFusion</h2>
            </Link>
          </div>
          <div>
            <p 
            className="ml-3"
            > - Educational Event management organization</p>
            
          </div>
        </aside>
        <nav>
          <header className="uppercase mb-2 font-bold text-xl text-white">Services</header>
          <a className="link link-hover">Virtual Reality Learning Experiences</a>
          <a className="link link-hover">STEAM Hackathons for Kids</a>
          <a className="link link-hover">Global Language Learning Festivals</a>
          <a className="link link-hover">Green Education and Sustainability Summits</a>
          <a className="link link-hover text-blue-400">see more</a>
        </nav>
        <nav>
          <header className="uppercase mb-2 font-bold text-xl text-white">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="uppercase mb-2 font-bold text-xl text-white">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
