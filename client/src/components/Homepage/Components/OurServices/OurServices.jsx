import React from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";
import service_1 from "../images/pant2.png";
import service_2 from "../images/icon_2.png";
import service_3 from "../images/tshirt_1.webp";
import service_4 from "../images/icon_2.png";
import service_5 from "../images/pant_1.jpeg";
import service_6 from "../images/jacket.jpg";
// import services_bottom from "../images/bgimage_2.jpg";
import services_bottom from "../images/jacket.jpg";                        

function OurServices() {
    const services = [
        { id: 1, name: "JEANS", image: service_1 },
        { id: 2, name: "SHIRT", image: service_2 },
        { id: 3, name: "TSHIRT", image: service_3 },
        { id: 4, name: "TROUSERS", image: service_4 },
        { id: 5, name: "FORMALS", image: service_5 },
        { id: 6, name: "CASUALS", image: service_6 },
    ];

    return (
        <div className="outservices_maincontainer">
            <div className="container ourServices">
                <div className="ourServices_heading">Our Rewears</div>
                <div className="ourServices_services">
                    {services.map((service, index) => (
                        <div className="services_box" key={index}>
                            <Link to={`/services/servicePage`}>
                                {/* <div >
                                    <img className="services_bottom_image" src={service.image} alt="" />
                                </div> */}
                                <div className="service_name">
                                    {service.name}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="services_bottom">
                    <div className="services_bottom_heading">
                        Get a Rewear
                    </div>
                    <div className="services_bottom_image">
                        <img src={services_bottom} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
