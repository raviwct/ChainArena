import React from 'react'

function OurHeros() {

    const heros = [
        {
            mainImg: "./img/heros/cate-one.png",
            darkmainImg: "./img/heros/dark-cate-one.png",
            name: "Crow",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-one.png',
            bgInner: './img/heros/inner-box-one.png',
            heros: "./img/heros/hero-one.png"
        },
        {
            mainImg: "./img/heros/cate-two.png",
            darkmainImg: "./img/heros/dark-cate-two.png",
            name: "Rachael",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-two.png',
            bgInner: './img/heros/inner-box-two.png',
            heros: "./img/heros/hero-two.png"
        },
        {
            mainImg: "./img/heros/cate-three.png",
            darkmainImg: "./img/heros/dark-cate-three.png",
            name: "Raul",
            btnText: "soldout",
            totalJoin: 300,
            join: 300,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-three.png',
            bgInner: './img/heros/inner-box-three.png',
            heros: "./img/heros/hero-three.png"
        },
        {
            mainImg: "./img/heros/cate-four.png",
            darkmainImg: "./img/heros/dark-cate-four.png",
            name: "Harace",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-four.png',
            bgInner: './img/heros/inner-box-four.png',
            heros: "./img/heros/hero-four.png"
        },
        {
            mainImg: "./img/heros/cate-five.png",
            darkmainImg: "./img/heros/dark-cate-four.png",
            name: "EMILY",
            btnText: "soldout",
            totalJoin: 300,
            join: 300,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-five.png',
            bgInner: './img/heros/inner-box-five.png',
            heros: "./img/heros/hero-five.png"
        },
        {
            mainImg: "./img/heros/cate-six.png",
            darkmainImg: "./img/heros/dark-cate-four.png",
            name: "Julia",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-six.png',
            bgInner: './img/heros/inner-box-six.png',
            heros: "./img/heros/hero-six.png"
        },
    ]

    return (
    


        <div className="bg-[#fff] dark:bg-heros-bg bg-cover bg-center">
            <div className='pt-[80px] pb-[120px]'>
                <h3 className='text-[#000] dark:text-[#E7B66A] text-[65px] h-[65px] leading-[65px] font-medium text-center max-w-[839px] uppercase mx-auto'>
                    OUR HEROS
                </h3>
                <p className='text-[19px] text-[#000] dark:text-[#ffffff] font-poppins max-w-[1100px] mx-auto text-center mt-[60px]'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit.
                </p>
                <div className='max-w-[1560px] mx-auto'>
                    <div className=''>
                        <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 lg:gap-14 gap-4'>
                            {heros.map((items) =>
                                <div className='relative h-[260px] w-[476px] mt-[105px] mx-auto'>
                                    <img src={items.mainImg} alt="" className='w-full hidden dark:block' />
                                    <img src={items.darkmainImg} alt="" className='w-full dark:hidden block' />
                                    <img src={items.heros} alt="" className='absolute z-0 -top-[50px] right-4' />
                                    <img src={items.bgInner} alt="" className='absolute bottom-[22px] w-[396px] left-[37px] hidden dark:block' />
                                    <img src="./img/heros/inner-box.png" alt="" className='absolute bottom-[22px] w-[396px] left-[37px] dark:hidden block' />
                                    <div className='absolute bottom-[47px] left-[69px]'>
                                        <h4 className={items.join === items.totalJoin ? "text-[#808080] dark:text-[#B7A6EF] text-[19px] font-normal uppercase" : "text-[#fff] dark:text-[#EFC6C5] text-[19px] font-normal uppercase"}>{items.name}</h4>
                                        <button className={items.btnText === "soldout" ? "text-[#000] dark:text-[#fff] text-[13px] font-normal uppercase bg-[#9B9B9B] dark:bg-[#9A1715] rounded  w-[80px] h-[30px]" : "w-[80px] h-[30px] text-[#fff] text-[13px] font-normal uppercase bg-[#000000] dark:bg-[#01820D] rounded "}>{items.btnText}</button>
                                    </div>
                                    <div className='absolute bottom-[61px] right-[66px]'>
                                        <h3 className='text-[#fff] w-[90px] text-center h-[30px] text-[19px] font-normal leading-[30px]'><span className={items.join === items.totalJoin ? "text-[#7C7C7C]" : "text-[#fff] dark:text-[#E7B66A]"}>{items.join}</span>/{items.totalJoin}</h3>
                                    </div>
                                    <div className='absolute'>
                                        <img src={items.shadowImg} alt="" className='w-100 dark:block hidden' />
                                        <img src="./img/heros/down-shadow.png" alt="" className='w-100 block dark:hidden' />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='w-100 text-center mt-[85px]'>
                        <button className='bg-[#000] dark:bg-[#9A1715] w-[209px] h-[47px] uppercase text-base  border-2 border-[#9A1715] rounded-md text-[#ffffff]'>
                            Play and win
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHeros