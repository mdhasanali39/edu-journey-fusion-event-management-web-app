import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {

    const [selectedService, setSelectedService] = useState({});

    const services = useLoaderData();
    const {id} = useParams();

    useEffect(()=>{
        const selected = services.find(service => service.id == id);
        setSelectedService(selected);
    },[id, services])

    console.log(selectedService);

    return (
        <div className="my-12 px-6">
            <ServiceDetailsCard selectedService={selectedService}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;