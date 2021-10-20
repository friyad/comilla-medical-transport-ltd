import React, { useState } from 'react';


const Service = ({ service }) => {
    const [extraP, setExtraP] = useState(false)
    const { id, capacity, description, img, name, price } = service;


    return (
        <div className="grid grid-cols-12 p-3 pr-0 shadow-md transition
        rounded-md bg-white relative gap-3 hover:shadow-2xl 
        md:grid-cols-2 md:h-96
        sm:grid-cols-1"
            data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="col-span-6 ">
                <img className="w-full lg:h-44 md:h-56 h-full rounded-md" src={img} alt="" />
            </div>
            <div className="col-span-6 text-left overflow-y-visible relative">
                <h3 className="text-2xl lg:m-0 lg:text-xl  pr-3 md:m-0 md:p-0">{name}</h3>
                <div className={extraP ? "sm:relative absolute z-50 bg-white p-3 shadow-2xl" : "absolute bg-white pr-3"}>
                    <p className="text-lg inline">{description.slice(0, 60)}
                        {extraP && description.slice(81, description.length)}
                    </p>
                    {!extraP ?
                        <span onClick={() => setExtraP(!extraP)} className="text-blue-600 ml-2 underline cursor-pointer">Read more...</span>
                        : <span onClick={() => setExtraP(!extraP)} className="text-blue-600 ml-2 underline cursor-pointer">Read less...</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;