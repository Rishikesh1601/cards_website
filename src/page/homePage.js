import React from "react";
import UpperCardComponent from "../components/upperCard.component";

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
        </>
    )
}

export default HomePage