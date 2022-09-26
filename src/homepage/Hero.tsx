import React from 'react'

function Hero() {
    return (
        <div className="bg-hero-bg bg-cover	bg-center">
            <div className='pt-[142px] pb-[222px]'>
                <h3 className='text-[#FFFFFF] text-[85px] font-medium text-center max-w-[839px] uppercase mx-auto drop-shadow-shadow-font '>
                    WITH <span className='text-[#E7B66A]'> Chain Arena </span>
                    EXPLORE
                    <span className='block'> NFT COLLECTION </span></h3>

                <div className='mt-12 text-center'>
                    <button className='bg-[#9A1715] uppercase text-base px-5 py-3 border-2 border-[#9A1715] rounded-md text-[#ffffff] mr-2'>
                        Connect to Wallet
                    </button>

                    <button className='ml-2 bg-[rgba(0, 0, 0, 0.5)] uppercase text-base px-5 py-3 border-2 border-[rgba(231, 182, 106, 0.5);] rounded-md text-[#ffffff]'>
                        WhiteList Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero