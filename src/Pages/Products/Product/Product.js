import React from 'react';

const Product = ({ product }) => {
    const { description, id, img, name, price } = product;

    return (
        <div className="border-b-4 py-4 grid grid-cols-12 pl-6 gap-8
            sm:grid-cols-1 sm:gap-2
            md:grid-cols-1 md:rounded-lg md:border-4  md:gap-0 md:py-0 md:pl-0"
            data-aos="fade-up" data-aos-anchor-placement="top-bottom" >

            <div className="col-span-4 sm:col-span-7 md:col-span-12">
                <img src={img} alt="" className="h-72 w-full" />
            </div>
            <div className="col-span-8 text-left md:p-3">
                <h1 className="text-3xl mb-3 font-bold">{name}</h1>
                <p className="text-xl mb-3 md:text-lg">{description}</p>
                <h2 className="sm:inline md:inline sm:mr-24 md:mr-40 text-3xl font-bold">${price}</h2>
                <button className="py-3 px-8 text-white text-lg rounded-md mt-4
                    sm:px-4 sm:py-2
                    md:px-4 md:py-2
                    lg:px-4 lg:py-2
                    xl:px-4 xl:py-2"
                    style={{ backgroundColor: '#023047' }}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;