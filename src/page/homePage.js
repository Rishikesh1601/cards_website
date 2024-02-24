import React from "react";
import UpperCardComponent from "../components/upperCard.component";
import SliderCardComponent from "../components/sliderCard.component";

const HomePage = () => {
    return(
        <>
        <div className="text-center mt-7 text-gray-400">
            <h2 className="font-semibold text-3xl leading-[51.07px]">COMMUNITIES WE MANAGE</h2>
        </div>
        <div>
            <UpperCardComponent />
        </div>
        <div className="text-center mt-11 text-gray-400">
            <h2 className="font-semibold text-3xl leading-[51.07px]">OUR SERVICES</h2>
        </div>
        <div className="lg:ms-24 lg:me-24 mb-5">
            <SliderCardComponent />
        </div>
        </>
    )
}

export default HomePage