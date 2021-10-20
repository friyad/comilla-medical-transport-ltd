import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';
import searchNotFound from '../../images/serchNotFound.jpg'

const Services = () => {
    const { services, setDisplayService, displayService } = useServices();


    const handleSearch = e => {
        if (services) {
            const matchServices = services.filter(service => service.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setDisplayService(matchServices)
        }
    }

    return (
        <div className="w-10/12 mx-auto mt-24">
            <h1 className="text-5xl font-bold text-left">
                <i className="fas fa-clipboard-list"></i> Services</h1>
            <hr />

            {/* Search Div-------------- */}
            <div className="mt-10 sm:w-10/12 w-7/12 mx-auto relative">
                <div className="absolute p-2 text-2xl rounded-full
                        flex justify-center items-center text-white"
                    style={{ backgroundColor: '#023047', width: '47px', height: '47px', top: '3px', left: '4px' }}>
                    <i className="fas fa-search"></i>
                </div>
                <input onChange={handleSearch} type="text" placeholder="Type your service name here" className="w-full border-2 border-gray-700 text-2xl rounded-full p-3 pl-16 " />
            </div>

            {/* Cart Container ------------ */}
            {!services
                ? <h2 className="mt-24 text-center"><i className="fas fa-spinner animate-spin"></i> Loading...</h2>
                : <div>
                    {displayService &&
                        <div>
                            <h2 className="text-left text-2xl font-bold sm:mt-10">Total Service Found {displayService.length}</h2>
                            {
                                displayService.length === 0 &&
                                <div className="text-center w-5/12 mx-auto">
                                    <img className="w-8/12 mx-auto" src={searchNotFound} alt="" />
                                    <h1 className="m-0 text-4xl font-bold text-red-600">Your searched service not found! <br />
                                        Please try again.</h1>
                                </div>
                            }
                            <div className="mt-10 gap-10
                        grid grid-cols-3
                        sm:grid-cols-1 sm:w-full
                        md:grid-cols-2 md:w-full
                        lg:grid-cols-2
                    ">
                                {displayService.map(service => <Service
                                    key={service.id}
                                    service={service}
                                />)}
                            </div>
                        </div>}
                </div>
            }
        </div>
    );
};

export default Services;