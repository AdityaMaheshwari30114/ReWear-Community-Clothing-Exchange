import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropDown from "../../../utils/DropDown";
import Map from "../../../utils/Map";
import useGeoLocation from "../../../utils/useGeoLocation";
import "../ServicePacks.css";
import Services_Navbar from "./Services_Navbar";

function Service() {
    const navigate = useNavigate();

    const { serviceName } = useParams(); // get the name from the URL
    const [selected, setSelected] = useState("");

    const location = useGeoLocation(); //getting current location of the user

    const options = [ "use points", "exchange"];

    return (
        <div className="servicePacks_outer">
            <div>
                <Services_Navbar serviceName={serviceName} />
            </div>
            {/* Map */}
            <div className="servicePacks_map">
                {/* <Map
                    lat={location.coordinates.lat}
                    long={location.coordinates.lng}
                /> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14726.770536806807!2d75.83016075922055!3d22.66524579853972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752307181424!5m2!1sen!2sin" width="1300" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Form */}
            <div className="servicePacks_serviceInfo_outer">
                <div className="container">
                    <div className="servicePacks_serviceInfo">
                        {/* <div className="servicePacks_input">
                            <div className="servicePacks_input_left">
                                Service Charge
                            </div>
                            <div className="servicePacks_input_right">
                                ₹ 100
                            </div>
                        </div> */}
                        <div className="servicePacks_input">
                            <div className="servicePacks_input_left">Use points to buy or exchange</div>
                            <div className="servicePacks_input_right">
                                <DropDown
                                    options={options}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </div>
                        </div>
                        <div className="servicePacks_buttons">
                            {selected ? (
                                <Link
                                    to={`/services/serviceProvider?service=${serviceName}&lat=${location.coordinates.lat}&long=${location.coordinates.lng}&cost=${selected}`}
                                    style={{ color: "inherit" }}
                                >
                                    <button>Continue</button>
                                </Link>
                            ) : (
                                <button disabled>Select exchange mode</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
