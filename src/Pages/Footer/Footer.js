import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="mt-40 text-white" style={{ backgroundColor: '#023047' }}>
            <div className="py-20 grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1
            grid-cols-12 w-10/12 sm:w-11/12 mx-auto gap-4"
                data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="col-span-3 lg:col-span-1 md:col-span-1 text-left">
                    <div className="w-10/12">
                        <h1 className="text-4xl mb-3 font-bold">Subscribe Us</h1>
                        <form action="" method="get">
                            <div className="relative">
                                <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '1px', marginLeft: '2px' }}> <i class="fas fa-user-circle" ></i>
                                </div>
                                <input className="w-full pl-14 p-3 text-black rounded-full" type="text" placeholder="Type your name" required />
                            </div>
                            <div className="relative mt-4">
                                <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '1px', marginLeft: '2px' }}> <i class="fas fa-envelope"></i>
                                </div>
                                <input className="w-full pl-14 p-3 text-black rounded-full" type="email" placeholder="Type your email" required />
                            </div>
                            <div className="relative mt-4">
                                <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '1px', marginLeft: '2px' }}> <i class="fas fa-lock"></i>
                                </div>
                                <input className="w-full pl-14 p-3 text-black rounded-full" type="password" placeholder="Type your password" required />
                            </div>
                            <button type="submit" className="mt-6 bg-gray-800 py-3  rounded-lg text-xl w-full">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="col-span-4 md:col-span-1 lg:col-span-1 text-left">
                    <h1>Contact Us</h1>
                    <div className="text-xl">
                        <p><i className="fas fa-phone-square-alt mr-2" ></i> +880 1886-544475</p>
                        <p><i className="fas fa-envelope-square mr-2"></i> cumillamedicaltransport@gmail.com</p>
                        <p> <i className="fab fa-yahoo mr-2"></i> cumillamedicaltransport@yahoo.com</p>
                    </div>
                </div>
                <div className="col-span-3  lg:col-span-1 md:col-span-1 text-left">
                    <h1>Address</h1>
                    <div className="text-xl">
                        <p className="pr-20"><i className="fas fa-map-marker-alt mr-2"></i>2nd flor, Road No. -21, block-B, Cumilla Fowjdari, Cumilla Adarsha Sadar, Cumilla</p>
                    </div>
                </div>
                <div className="col-span-2  lg:col-span-1 md:col-span-1 text-left">
                    <h1>Importent Links</h1>
                    <div className="text-xl text-white flex flex-col">
                        <Link className="text-white mb-2"
                            to="/home"><i className="fas fa-home mr-2"></i> Home</Link>
                        <Link className="text-white mb-2"
                            to="/services"><i className="fas fa-poll-h mr-2"></i> Services</Link>
                        <Link className="text-white mb-2"
                            to="/gallery"><i className="fas fa-images mr-2"></i> Gallery</Link>
                        <Link className="text-white mb-2"
                            to="/about"><i className="fas fa-address-card mr-2"></i> About</Link>
                    </div>
                </div>

            </div>
            <div className="py-10 grid sm:grid-cols-1 grid-cols-2 justify-center items-center text-white"
                style={{ backgroundColor: '#034465' }}
                data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <p >© Copyrights 2022 Cumilla Medical Transport Ltd all Rights Reserved</p>
                <div className="text-4xl" >
                    <i className="fab fa-linkedin mr-5 animate__animated animate__fadeInDown"></i>
                    <i className="fab fa-twitter-square mr-5 animate__animated animate__fadeInDown"></i>
                    <i className="fab fa-facebook-square mr-5 animate__animated animate__fadeInDown"></i>
                    <i className="fab fa-youtube-square mr-5 animate__animated animate__fadeInDown"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;