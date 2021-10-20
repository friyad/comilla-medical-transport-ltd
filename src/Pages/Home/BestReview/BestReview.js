import React from 'react';
import { Carousel } from '3d-react-carousal';

const BestReview = () => {
    const sameMailStyles = "w-full bg-gray-100 grid sm:grid-cols-1 grid-cols-12 sm:gap-0 gap-10";

    let slides = [
        <div className={sameMailStyles} >
            <div className="col-span-5 sm:col-span-7">
                <img src="https://i.ibb.co/D9WL5yK/Review-1.jpg" alt="" className="w-full sm:h-32 h-80" />
            </div>
            <div className="col-span-7 p-4 text-left" data-aos="flip-down">
                <h1 className="text-3xl font-bold sm:text-xl">Jhonny Rivera</h1>
                <p className="sm:text-sm text-xl">A Colombian singer and second cousin of Pablo Escobar. A broken heart led him to compose his first release The Pain of A Game ', followed by others, including 'I'm Single' 'and' 'Best Sólito' 'with which he garnered a local regional recognition titled Premios Nuestra Tierra a Best Tropical Song.</p>
                <p className="text-xl sm:text-sm"><i class="fas fa-quote-left text-purple-500 text-4xl mr-3"></i> Cumilla Medical Transport service is too good. I am happy to get this service quickly. I highly recomanded you to purchese some service. 100% trustable.</p>
            </div>
        </div>,
        <div className={sameMailStyles} >
            <div className="col-span-5">
                <img src="https://i.ibb.co/mTcGbQp/Review-2.jpg" alt="" className="w-full sm:h-32 h-80" />
            </div>
            <div className="col-span-7 p-4 text-left" data-aos="flip-down">
                <h1 className="text-3xl font-bold sm:text-xl">Wan Azlan</h1>
                <p className="sm:text-sm text-xl">Wan Azlan bin Wan Ali Abdullah (professionally known as Wan Azlan Abdullah Abdullah made his first Malaysian team at the 1996 Summer Olympics in Atlanta. There, he failed to reach the top 16 final in any of his individual events.</p>
                <p className="text-xl sm:text-sm"><i class="fas fa-quote-left text-purple-500 text-4xl mr-3"></i> Thank you very much Cumilla Medical Transport service. I am happy to get this service quickly. Your work is too fast from other ambulance providers.</p>
            </div>
        </div>,
        <div className={sameMailStyles} >
            <div className="col-span-5">
                <img src="https://i.ibb.co/DLdfr7T/Review-3.jpg" alt="" className="w-full sm:h-32 h-80" />
            </div>
            <div className="col-span-7 p-4 text-left" data-aos="flip-down">
                <h1 className="text-3xl font-bold sm:text-xl">John Wesley</h1>
                <p className="sm:text-sm text-xl">John Wesley is first Malaysian team at the 1996 Summer Olympics in Atlanta. There, he failed to reach the top 16 final in any of his individual events, finishing thirty-sixth in the 200 m individual medley , and twenty-seventh in the 400 m individual medley.</p>
                <p className="text-xl sm:text-sm"><i class="fas fa-quote-left text-purple-500 text-4xl mr-3"></i> There product is good. I am happy to recived there products very quickly</p>
            </div>
        </div>,
        <div className={sameMailStyles}>
            <div className="col-span-5">
                <img src="https://i.ibb.co/v1dCLy8/Review-4.jpg" alt="" className="w-full sm:h-32 h-80" />
            </div>
            <div className="col-span-7 p-4 text-left" data-aos="flip-down">
                <h1 className="text-3xl font-bold sm:text-xl">John Ales</h1>
                <p className="sm:text-sm text-xl">John Ales is an American actor best known for appearing in Spy Hard, The Nutty Professor, You Wish, and other films and television series.</p>
                <p className="text-xl sm:text-sm"><i class="fas fa-quote-left text-purple-500 text-4xl mr-3"></i> Very quick response and behaviour is too good. I am 100% happy.</p>
            </div>
        </div>,
        <div className={sameMailStyles} >
            <div className="col-span-5">
                <img src="https://i.ibb.co/PWBFrwj/Review-5.jpg" alt="" className="w-full sm:h-32 h-80" />
            </div>
            <div className="col-span-7 p-4 text-left" data-aos="flip-down">
                <h1 className="text-3xl font-bold sm:text-xl">Wan Azlan</h1>
                <p className="sm:text-sm text-xl">Wan Azlan bin Wan Ali Abdullah (professionally known as Wan Azlan Abdullah Abdullah made his first Malaysian team at the 1996 Summer Olympics in Atlanta. There, he failed to reach the top 16 final in any of his individual events.</p>
                <p className="text-xl sm:text-sm"><i class="fas fa-quote-left text-purple-500 text-4xl mr-3"></i> Thank you very much Cumilla Medical Transport service. I am happy to get this service quickly. Your work is too fast from other ambulance providers.</p>
            </div>
        </div>,
    ];

    return (
        <div className="mt-32 sm:mb-60 md:mb-44">
            <h1 className="uppercase font-bold text-4xl">
                <i className="fa fa-arrow-circle-left mr-2" aria-hidden="true"
                    style={{ color: '#023047' }}></i> Our posetive Reviews from customars
                <i className="fa fa-arrow-circle-right ml-2" aria-hidden="true" style={{ color: '#023047' }}></i>
            </h1>

            <div className="mt-16 w-full sm:w-11/12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{ height: '22rem' }}>
                <Carousel slides={slides} autoplay={false} interval={5000} />
            </div>
        </div>
    );
};

export default BestReview;