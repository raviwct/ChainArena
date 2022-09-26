import React from 'react'
import Slider from "react-slick";

function Collection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '280px',
    };

    const settingsTwo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
    };

    const sliderContent = [
        {
            heroImg: "./img/collection/coll-1.png",
            contentText: "Name Will Place Here"
        },
        {
            heroImg: "./img/collection/coll-1 (1).png",
            contentText: "Name Will Place Here"
        },
        {
            heroImg: "./img/collection/coll-1 (2).png",
            contentText: "Name Will Place Here"
        },
        {
            heroImg: "./img/collection/coll-1 (3).png",
            contentText: "Name Will Place Here"
        },
        {
            heroImg: "./img/collection/coll-1 (4).png",
            contentText: "Name Will Place Here"
        },
        {
            heroImg: "./img/collection/coll-1 (5).png",
            contentText: "Name Will Place Here"
        },
    ]


    return (
        <div className='bg-coll-bg py-[80px] overflow-x-hidden'>
            <h3 className='text-[#E7B66A] text-[65px] font-medium text-center pb-[80px] uppercase mx-auto'>
                Our Collection
            </h3>
            <Slider {...settings}>
                {sliderContent.map((items) =>
                    <div className='relative px-2'>
                        <img src="./img/slider-bg.png" alt="" className='w-full ' />
                        <img src={items.heroImg} alt="" className='absolute top-[60px] left-[80px]' />
                        <h5 className='uppercase text-[#fff] font-normal text-[17px] font-poppins absolute bottom-[20px] left-[20px]'>{items.contentText}</h5>
                    </div>
                )}
            </Slider>
            <Slider {...settingsTwo} className="mt-4">
                {sliderContent.map((items) =>
                    <div className='relative px-2'>
                        <img src="./img/slider-bg.png" alt="" className='w-full' />
                        <img src={items.heroImg} alt="" className='absolute top-[60px] left-[60px]' />
                        <h5 className='uppercase text-[#fff] font-normal text-[17px] font-poppins absolute bottom-[20px] left-[20px]'>{items.contentText}</h5>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Collection