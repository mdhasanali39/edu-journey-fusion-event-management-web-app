import OurFeedback from "../../components/OurFeedback/OurFeedback";
import OurSponsors from "../../components/OurSponsors/OurSponsors";
import Services from "../../components/Services/Services";


const Home = () => {

    

    return (
        <div className="px-5 md:px-12">
            <Services></Services>
            <OurFeedback></OurFeedback>
            <OurSponsors></OurSponsors>
        </div>
    );
};

export default Home;