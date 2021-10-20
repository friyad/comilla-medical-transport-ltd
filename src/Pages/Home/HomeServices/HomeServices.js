import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from './Service/Service';

const HomeServices = () => {
    const { services } = useServices();

    return (
        <div className="mt-20">
            <div >
                <h1 className="uppercase font-bold text-4xl">
                    <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true" style={{ color: '#023047' }}></i>
                    Service you will get from us
                    <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
                </h1>
            </div>
            <div className="bg-gray-100 grid
            sm:grid-cols-1 sm:w-full sm:gap-y-12 sm:p-2
            md:grid-cols-2 md:w-full md:gap-y-20  md:p-2
            lg:grid-cols-2 lg:w-full
            xl:grid-cols-2 xl:w-full
            3xl:w-11/12
            grid-cols-3 mx-auto rounded-lg gap-8 p-8 mt-4 w-11/12 ">
                {
                    services ?
                        services.slice(0, 6).map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                        : <h2 className="mt-24 text-center"><i className="fas fa-spinner animate-spin"></i> Loading...</h2>
                }
            </div>
        </div>
    );
};

export default HomeServices;