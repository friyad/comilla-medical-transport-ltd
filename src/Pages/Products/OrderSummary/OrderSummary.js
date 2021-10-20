import React from 'react';

const OrderSummary = () => {
    return (
        <div className="fixed sm:static md:static text-left mt-10">
            <h1 className="text-3xl font-bold">Order Summary</h1>
            <div className="grid grid-cols-4">
                <h3 className="text-2xl m-0 col-span-3 mb-3">Total Quntity</h3>
                <h3 className="text-2xl m-0">0</h3>
            </div>
            <div className="grid grid-cols-4 mt-1">
                <h3 className="text-2xl m-0 col-span-3">Price</h3>
                <h3 className="text-2xl m-0">$0</h3>
            </div>
            <div className="grid grid-cols-4 mt-1">
                <h3 className="text-2xl m-0 col-span-3">Tex</h3>
                <h3 className="text-2xl m-0">$0</h3>
            </div>
            <hr className="border-2 mb-3" />
            <div className="grid grid-cols-4 mt-1">
                <h3 className="text-2xl m-0 col-span-3">Total Price</h3>
                <h3 className="text-2xl m-0">$0</h3>
            </div>

        </div>
    );
};

export default OrderSummary;