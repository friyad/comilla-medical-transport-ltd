import React from 'react';
import { useHistory, useParams } from 'react-router';
import useServices from '../../../Hooks/useServices';
import swal from 'sweetalert';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const { services } = useServices();
    const history = useHistory();

    const handlePlaceOrderBtn = () => {
        swal({
            title: "Order Place Successfull!",
            text: "Thanks for your order. We have recived your order!",
            icon: "success",
            button: "Ok",
        });
        history.push('/services')
    }

    let displayMatchService = {};
    if (services) {
        const matchServices = services.find(service => service.id === JSON.parse(serviceID));
        displayMatchService = matchServices;
    }
    const text = (displayMatchService?.price / 100) * 5;
    const totalPrice = displayMatchService?.price + text;

    return (
        <div className="mt-32 grid grid-cols-12 w-10/12 mx-auto gap-8
        sm:grid-cols-1 sm:w-11/12 sm:mt-10
        md:grid-cols-1 md:w-11/12 md:mt-10
                ">
            <div className="col-span-7 text-left pr-32 sm:pr-2">
                <h1 className="text-5xl my-4 font-bold">{displayMatchService?.name}</h1>
                <p className="text-xl mb-5 leading-8">{displayMatchService?.description}</p>

                <div className="grid grid-cols-2 w-5/12">
                    <h1 className="text-3xl m-0">Price:</h1>
                    <h1 className="text-3xl m-0"> ${displayMatchService?.price}</h1>
                </div>
                <div className="grid grid-cols-2 w-5/12">
                    <h1 className="text-3xl m-0">Text:</h1>
                    <h1 className="text-3xl m-0">${text}</h1>
                </div>
                <div className="grid grid-cols-2 w-5/12">
                    <h1 className="text-3xl m-0">Total:</h1>
                    <h1 className="text-3xl m-0">${totalPrice}</h1>
                </div>
                <button onClick={handlePlaceOrderBtn} className="text-white px-16 py-5 rounded-md mt-8 text-xl"
                    style={{ backgroundColor: '#023047' }}>Place Order</button>
            </div>
            <div className="col-span-5 sm:col-span-7">
                <img src={displayMatchService.img} className="w-full h-full" alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;