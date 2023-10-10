import { useLoaderData } from "react-router-dom";
import SpeakersCard from "./SpeakersCard";

const Speakers = () => {
  const speakers = useLoaderData();

  return (
    <div className="py-12 px-5 lg:px-12 min-h-[70vh]">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        {speakers?.map((speaker) => (
          <SpeakersCard key={speaker.id} speaker={speaker}></SpeakersCard>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
