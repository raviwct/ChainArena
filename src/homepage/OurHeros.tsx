import React from 'react'

function OurHeros() {

    const heros = [
        {
            mainImg: "./img/heros/cate-one.png",
            name: "Crow",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-one.png',
            bgInner:'./img/heros/inner-box-one.png',
            heros:"./img/heros/hero-one.png"
        },
        {
            mainImg: "./img/heros/cate-two.png",
            name: "Rachael",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-two.png',
            bgInner:'./img/heros/inner-box-two.png',
            heros:"./img/heros/hero-two.png"
        },
        {
            mainImg: "./img/heros/cate-three.png",
            name: "Raul",
            btnText: "soldout",
            totalJoin: 300,
            join: 300,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-three.png',
            bgInner:'./img/heros/inner-box-three.png',
            heros:"./img/heros/hero-three.png"
        },
        {
            mainImg: "./img/heros/cate-four.png",
            name: "Harace",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-four.png',
            bgInner:'./img/heros/inner-box-four.png',
            heros:"./img/heros/hero-four.png"
        },
        {
            mainImg: "./img/heros/cate-five.png",
            name: "EMILY",
            btnText: "soldout",
            totalJoin: 300,
            join: 300,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-five.png',
            bgInner:'./img/heros/inner-box-five.png',
            heros:"./img/heros/hero-five.png"
        },
        {
            mainImg: "./img/heros/cate-six.png",
            name: "Julia",
            btnText: "buy now",
            totalJoin: 300,
            join: 250,
            statusJoin: "running",
            statusBtn: "remaining",
            shadowImg: './img/heros/down-shadow-six.png',
            bgInner:'./img/heros/inner-box-six.png',
            heros:"./img/heros/hero-six.png"
        },
    ]

    return (
        <div className="bg-heros-bg bg-cover bg-center">
            <div className='py-[80px]'>
                <h3 className='text-[#E7B66A] text-[65px] font-medium text-center max-w-[839px] uppercase mx-auto'>
                    OUR HEROS
                </h3>
                <p className='text-[19px] text-[#ffffff] font-poppins max-w-[1100px] mx-auto text-center'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit.
                </p>
                <div className='max-w-7xl mx-auto'>
                    <div className="grid grid-cols-3 gap-5 mt-[80px]">
                        {heros.map((items) =>
                            <div className='relative mt-[50px] mb-[80px]'>
                                <img src={items.mainImg} alt="" className='w-100' />
                                <img src={items.heros} alt="" className='absolute z-0 -top-[90px] right-4'/>
                                <img src={items.bgInner} alt="" className='absolute bottom-[10px] w-11/12 left-[20px]'/>
                                <div className='absolute bottom-[35px] left-[45px]'>
                                    <h4 className={items.join === items.totalJoin ? "text-[#B7A6EF] text-[19px] font-normal uppercase" : "text-[#EFC6C5] text-[19px] font-normal uppercase"}>{items.name}</h4>
                                    <button className={items.btnText === "soldout" ? "text-[#fff] text-[13px] font-normal uppercase bg-[#9A1715] rounded px-2 py-1" : "text-[#fff] text-[13px] font-normal uppercase bg-[#01820D] rounded px-2 py-1"}>{items.btnText}</button>
                                </div>
                                <div className='absolute bottom-[50px] right-[40px]'>
                                    <h3 className='text-[#fff]'><span className={items.join === items.totalJoin ? "text-[#7C7C7C]" : "text-[#E7B66A]"}>{items.join}</span>/{items.totalJoin}</h3>
                                </div>
                                <div className='absolute'>
                                    <img src={items.shadowImg} alt="" className='w-100' />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='w-100 text-center mt-[50px]'>
                         <button className='bg-[#9A1715] uppercase text-base px-5 py-3 border-2 border-[#9A1715] rounded-md text-[#ffffff] mr-2'>
                            Play and win
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHeros