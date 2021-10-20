import React from 'react';
import useProducts from '../../Hooks/useProducts';
import OrderSummary from './OrderSummary/OrderSummary';
import Product from './Product/Product';
import searchNotFound from '../../images/serchNotFound.jpg'

const Products = () => {
    const { products, displayProducts, setDisplayProducts } = useProducts();

    const handleProductSearch = e => {
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value))
        setDisplayProducts(matchProducts)
    }


    return (
        <div >
            <div className="my-16">
                <h1 className="uppercase font-bold text-5xl sm:text-2xl md:text-3xl lg:text-3xl">
                    <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true"
                        style={{ color: '#023047' }}></i>Our Medical Products
                    <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
                </h1>
            </div>
            <hr />

            <div className="grid grid-cols-12 w-11/12 mx-auto my-6
            sm:grid-cols-1
            md:grid-cols-1
            ">
                {/* Order Summary------------- */}
                <div className="col-span-2 border-r-4
                sm:border-0
                md:border-0
                lg:col-span-3">
                    {
                        <OrderSummary />
                    }
                </div>

                <div className="w-full mx-auto col-span-10 lg:col-span-9 ">
                    {/* Search Div------------- */}
                    <div className="mt-10 sm:w-full w-10/12 mx-auto relative">
                        <div className="absolute p-2 text-2xl rounded-full
                        flex justify-center items-center text-white"
                            style={{ backgroundColor: '#023047', width: '47px', height: '47px', top: '3px', left: '4px' }}>
                            <i className="fas fa-search"></i>
                        </div>
                        <input onChange={handleProductSearch} type="text" placeholder="Type your service name here" className="w-full border-2 border-gray-700 text-2xl rounded-full p-3 pl-16 " />
                    </div>

                    {!products
                        ? <h2 className="mt-24 text-center"><i className="fas fa-spinner animate-spin"></i> Loading...</h2>
                        : <div>
                            {displayProducts &&
                                <div className="mt-8">
                                    <h3 className="text-left text-2xl font-bold pl-3 text-purple-900">Total Products Found {displayProducts.length}</h3>

                                    {/* Search Not Found------------ */}
                                    {displayProducts.length === 0 &&
                                        <div className="text-center w-5/12 mx-auto">
                                            <img className="w-8/12 mx-auto" src={searchNotFound} alt="" />
                                            <h1 className="m-0 text-4xl font-bold text-purple-800">Your searched service not found! <br />
                                                Please try again.</h1>
                                        </div>
                                    }
                                    {/* Products Container----------- */}
                                    <div className="grid grid-cols-1 mt-4
                                    sm:grid-cols-1
                                    md:grid-cols-2 md:gap-4">
                                        {
                                            displayProducts.map(product => <Product
                                                key={product.id}
                                                product={product}
                                            />)
                                        }
                                    </div>
                                </div>
                            }
                        </div>

                    }

                </div>
            </div>
        </div>
    );
};

export default Products;