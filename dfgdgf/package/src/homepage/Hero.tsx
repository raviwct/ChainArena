import React from 'react'

function Hero() {
    return (
        <div className="bg-hero-bg bg-cover	bg-center pt-[95px]">
            <div className='pt-[142px] pb-[222px]'>
                <h3 className='text-[#FFFFFF] 2xl:text-[85px] md:text-[60px] text-[40px] font-medium text-center max-w-[839px] uppercase mx-auto drop-shadow-shadow-font '>
                    WITH <span className='text-[#E7B66A]'> Chain Arena </span>
                    EXPLORE
                    <span className='block'> NFT COLLECTION </span></h3>

                <div className='mt-[53px] text-center'>
                    <button className='mr-[7px] bg-[#9A1715] uppercase text-base w-[209px] h-[47px] border-2 border-[#9A1715] rounded-md text-[#ffffff]'>
                        Connect to Wallet
                    </button>

                    <button className='ml-[7px] border-[#785c37] bg-btn-wish w-[209px] h-[47px] uppercase text-base border-2  rounded-md text-[#ffffff]'>
                        WhiteList Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero