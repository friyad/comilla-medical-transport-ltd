import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="my-44 mx-auto w-6/12 sm:w-11/12 text-center flex justify-center items-center">
            <div>
                <img src="https://i.ibb.co/cFFRLHM/404-Page-Not-Found.png" className="w-8/12 mx-auto" alt="" />
                <h1 className="text-5xl font-bold text-center m-0" style={{ color: '#db3682' }}>Not Found</h1>
                <p className="text-xl">Sorry, We could not found your page. Please go to home and search again.</p>
                <Link className="px-10 py-4 inline-block rounded-md text-xl text-white hover:text-white" to="/home" style={{ backgroundColor: '#023047' }}>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;