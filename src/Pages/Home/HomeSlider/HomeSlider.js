import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    const data = [
        { image: "https://i.ibb.co/dBBydyN/1.jpg", },
        { image: "https://i.ibb.co/3SVwPt9/2.jpg", },
        { image: "https://i.ibb.co/ph44sBG/3.jpg", },
        { image: "https://i.ibb.co/dJtL7MV/4.jpg", },
        { image: "https://i.ibb.co/yqW8qN1/5.png", },
        { image: "https://i.ibb.co/wJ2bwKM/6.jpg", },
        { image: "https://i.ibb.co/vw3D8zz/7.jpg", },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }

    return (
        <div style={{ textAlign: "center", position: 'relative' }}>

            <div className="absolute top-0 w-full h-full flex justify-center items-center">
                <div className="z-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                    <h1 className="sm:text-2xl text-4xl
                    tracking-wider font-bold text-white animate-pulse">
                        Welcome to Cumilla Medical Transport Ltd (CMTL)</h1>
                    <Link to="/services"
                        className="px-12 mt-3 sm:px-8 sm:py-3 py-5 inline-block text-xl text-white rounded-md
                        hover:text-white"
                        style={{ backgroundColor: '#023047', }}>Enquire Now</Link>
                </div>
            </div>

            <div style={{
                padding: "0",
                overflow: 'hidden',
                backgroundColor: 'black',
            }}>
                <Carousel
                    data={data}
                    time={4000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="0"
                    slideNumber={false}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "0px auto",
                        opacity: '60%'
                    }}
                />
            </div>
        </div>
    );
};

export default HomeSlider;