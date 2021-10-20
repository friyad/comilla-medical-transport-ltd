import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const history = useHistory()
    const { capacity, description, img, name, price, id } = service;
    const [extraText, setExtraText] = useState(false)

    const handleEnquireNowBtn = () => {
        history.push(`/servicesDetails/${id}`)
    }

    return (
        <div className="shadow-lg hover:shadow-2xl transition rounded-lg border-2"
            data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
            <img src={img} alt="" className="w-full h-72 rounded-t-lg" />
            <div className="p-3">
                <h1 className="text-3xl mb-3 font-bold">{name}</h1>

                {/* Dinamic description by read more and read lees btn */}
                <p className="inline text-xl">{description.slice(0, 150)
                }{extraText && description.slice(150, description.length)}
                </p>

                {/* Read more and Read less btn------ */}
                <span onClick={() => setExtraText(!extraText)}
                    className="text-purple-500 ml-2 cursor-pointer text-xl">
                    {!extraText ? "Read More..." : "Read Less...."}</span>

                <div className="flex justify-around items-center mt-4">
                    <h2 className="text-2xl m-0 sm:text-xl md:text-xl lg:text-xl xl:text-2xl"><i class="fas fa-user"></i> {capacity}</h2>
                    <h2 className="text-2xl m-0 sm:text-xl md:text-xl lg:text-xl xl:text-2xl"><i class="fas fa-dollar-sign"></i> {price}</h2>
                    <button onClick={handleEnquireNowBtn} className="py-3 px-8 text-white text-lg rounded-md
                    sm:px-4 sm:py-2
                    md:px-4 md:py-2
                    lg:px-4 lg:py-2
                    xl:px-4 xl:py-2"
                        style={{ backgroundColor: '#023047' }}>Enquire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;