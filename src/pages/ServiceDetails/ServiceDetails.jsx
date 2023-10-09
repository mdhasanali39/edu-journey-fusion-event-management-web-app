import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {

    const [selectedService, setSelectedService] = useState({});

    const services = useLoaderData();
    const {name} = useParams();

    useEffect(()=>{
        const selected = services.find(service => service.name === name);
        setSelectedService(selected);
    },[name,services])

    console.log(selectedService);

    return (
        <div className="my-12 px-6">
            <ServiceDetailsCard selectedService={selectedService}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;