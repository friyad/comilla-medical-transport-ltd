import React from 'react';
import { Carousel } from '3d-react-carousal';
import useServices from '../../Hooks/useServices';
import GalleryImage from './GalleryImage/GalleryImage';

const Gallery = () => {
    const { services } = useServices()

    let slides = []
    if (services) {
        services.map(service => slides.push(
            <img src={service.img} className="w-full h-96" alt="Slider Image" />
        ))
    }

    return (
        <div>
            <div className="my-16">
                <h1 className="uppercase font-bold text-5xl">
                    <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true"
                        style={{ color: '#023047' }}></i>Gallery
                    <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
                </h1>
            </div>
            <hr />

            <div className="mt-16 w-full sm:w-11/12 mb-28" data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{ height: '22rem' }}>
                <Carousel slides={slides} autoplay={false} interval={5000} />
            </div>

            <div>
                <div className="text-left w-10/12 mx-auto my-5">
                    <h1 className="text-4xl font-bold ">Our Cars (Ambulances)</h1>
                    <hr className="border-t-2" />
                </div>
                {!services
                    ? <h2 className="mt-24 text-center"><i className="fas fa-spinner animate-spin"></i> Loading...</h2>
                    : <div className="grid grid-cols-3 w-10/12 mx-auto gap-8
                sm:grid-cols-1 sm:w-11/12
                md:grid-cols-2 md:w-11/12
            ">
                        {services.map(service => <GalleryImage
                            key={service.id}
                            img={service.img}
                        />)
                        }
                    </div>
                }

            </div>



        </div>
    );
};

export default Gallery;