import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import HoemProduct from './HomeProduct/HoemProduct';

const HomeProducts = () => {
    const { products } = useProducts();


    return (
        <div className="mt-28">
            <h1 className="uppercase font-bold text-4xl">
                <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true"
                    style={{ color: '#023047' }}></i> Our Medical Products
                <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
            </h1>
            <div className="bg-gray-100 mx-auto w-11/12 p-8 rounded-lg
            grid grid-cols-4 gap-8
            sm:w-full sm:grid-cols-1
            md:w-full md:grid-cols-2
            lg:w-full lg:grid-cols-2
            xl:w-full xl:grid-cols-3
            ">
                {
                    !products
                        ? <h2 className="mt-24 text-center"><i className="fas fa-spinner animate-spin"></i> Loading...</h2>
                        : products.slice(0, 4).map(product => <HoemProduct
                            key={product.id}
                            product={product}
                        />
                        )
                }
            </div>
        </div>
    );
};

export default HomeProducts;