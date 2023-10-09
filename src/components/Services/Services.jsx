import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/services_data.json");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-12">
      <h2 className="text-4xl text-center font-bold mb-10">Our Services</h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {services?.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
