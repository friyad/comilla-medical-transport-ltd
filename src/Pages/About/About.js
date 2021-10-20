import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="my-16">
                <h1 className="uppercase font-bold text-5xl">
                    <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true"
                        style={{ color: '#023047' }}></i>About Us
                    <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
                </h1>
            </div>

            <div className="w-11/12 mx-auto">
                <hr className="border-2" />
                <div className="mt-10 grid grid-cols-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:gap-10 md:gap-8 ">
                    <div className="col-span-7 text-left sm:pl-2 md:pl-2 lg:pl-2 pl-20">
                        <h1 className="text-5xl font-bold my-3">Best Medical transport service</h1>
                        <p className="mb-2 text-xl leading-9">As the world enters its second year of the coronavirus pandemic, having a strong healthcare system in the country is as important as ever. Medical care can vary widely between countries – when you become an expat or a digital nomad, it’s something you quickly get to know – but which countries are graced with the best healthcare in the world? We have come up with the countries viewed to have the most well-developed healthcare systems globally.
                        </p>
                        <Link className="text-white hover:text-white text-xl rounded-md mt-4 inline-block px-8 py-5 sm:px-5 sm:py-3 md:px-5 md:py-3" to="/services" style={{ backgroundColor: '#023047' }}>Enquire our Services</Link>
                    </div>
                    <div className="col-span-5">
                        <img className="w-full h-full" src="https://i.ibb.co/Nn2PKtX/about-us.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;