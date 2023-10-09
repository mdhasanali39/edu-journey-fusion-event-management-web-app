const SpeakersCard = ({ speaker }) => {
  const { image, name, expert_at } = speaker || {};

  return (
    <div className="border p-5 rounded-md">
      <div>
        <img className="w-full h-[250px] rounded-md" src={image} alt={name} />
      </div>
      <div>
        <h4 
        className="text-2xl font-semibold mt-4 mb-2 transition ease-linear duration-200 hover:text-clr-red"
        >{name}</h4>
        <p>{expert_at}</p>
      </div>
    </div>
  );
};

export default SpeakersCard;
