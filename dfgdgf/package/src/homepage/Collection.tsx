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
        responsive: [
            {
                breakpoint: 1655,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '120px',

                }
            },
            {
                breakpoint: 1455,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '90px',


                }
            },
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '60px',


                }
            }, 
        

        ]
};

const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '150px',
    responsive: [
        {
            breakpoint: 1655,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding: '120px',

            }
        },
        {
            breakpoint: 1455,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '90px',


            }
        },
        {
            breakpoint: 1210,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '60px',


            }
        }, {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '30px',


            }
        },

    ]
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
    {
        heroImg: "./img/collection/coll-1 (5).png",
        contentText: "Name Will Place Here"
    },
]


return (
    <div className='dark:bg-coll-bg pt-[120px] pb-[158px] overflow-x-hidden'>
        <h3 className='text-[#000] dark:text-[#E7B66A] text-[55px] font-medium text-center pb-[20px] uppercase mx-auto'>
            Our Collection
        </h3>
        <Slider {...settings}>
            {sliderContent.map((items) =>
                <div className='relative max-w-full h-[380px] px-[21px]'>
                    <div className='hidden dark:block'>
                        <img src="./img/slider-bg.png" alt="" className='w-full h-[380px] ' />
                    </div>
                    <div className='block dark:hidden'>
                        <img src="./img/white-collection.png" alt="" className='w-full h-[380px]  ' />
                    </div>
                    <img src={items.heroImg} alt="" className='absolute top-[60px] left-[50%] transform-trans-center' />
                    <h5 className='uppercase text-[#000] dark:text-[#fff] font-normal text-[17px] font-BakBakRegular  absolute bottom-[15px] left-[46px]'>{items.contentText}</h5>
                </div>
            )}
        </Slider>
        <Slider {...settingsTwo} className="mt-[39px]">
            {sliderContent.map((items) =>
                <div className='relative max-w-full h-[380px] px-[21px]'>
                    <div className='hidden dark:block'>
                        <img src="./img/slider-bg.png" alt="" className='w-full h-[380px] ' />
                    </div>
                    <div className='block dark:hidden'>
                        <img src="./img/white-collection.png" alt="" className='w-full h-[380px]  ' />
                    </div>
                    <img src={items.heroImg} alt="" className='absolute top-[60px] left-[50%] transform-trans-center' />
                    <h5 className='uppercase text-[#000] dark:text-[#fff] font-normal text-[17px] font-BakBakRegular  absolute bottom-[15px] left-[46px]'>{items.contentText}</h5>
                </div>
            )}
        </Slider>
    </div>
)
}

export default Collection