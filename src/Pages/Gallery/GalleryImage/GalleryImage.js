import React from 'react';

const GalleryImage = ({ img }) => {

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
            <img className="w-full h-full" src={img} alt="" />
        </div>
    );
};

export default GalleryImage;