import React from 'react';
import { Link } from 'react-router-dom';

const HoemProduct = ({ product }) => {
    const { description, id, name, img, price } = product;

    return (
        <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-2xl transition"
            data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <img className="h-72 w-full rounded-t-md" src={img} alt="" />
            <h2 className="m-1 text-3xl font-bold">{name}</h2>
            <div className="p-3 flex justify-around items-center mt-4">
                <h2 className="m-0 text-2xl font-bold">${price}</h2>
                <Link className="text-white px-7 py-3 text-lg rounded-md hover:text-white"
                    to="/products" style={{ backgroundColor: '#023047' }}>Go to all Products</Link>
            </div>
        </div>
    );
};

export default HoemProduct;