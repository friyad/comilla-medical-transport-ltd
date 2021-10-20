import React from 'react';
import BestReview from './BestReview/BestReview';
import HomeProducts from './HomeProducts/HomeProducts';
import HomeServices from './HomeServices/HomeServices';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <HomeServices />
            <HomeProducts />
            <BestReview />
        </div>
    );
};

export default Home;