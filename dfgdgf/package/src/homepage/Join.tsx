import React from 'react'

function Join() {
    return (
        <div className='bg-cover bg-no-repeat bg-[#F0F0F0] dark:bg-join-bg pt-[108px] pb-[90px]'>
            <h3 className='text-[#000] dark:text-[#E7B66A] text-[40px]  font-medium text-center uppercase mx-auto'>
                JOIN OUR COMMUNITY
            </h3>
            <p className='text-[19px] text-[#000] dark:text-[#ffffff] font-poppins text-center mt-[28px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className='mt-[33px] flex justify-center'>
                <button className='mr-[10px] bg-[#000] dark:bg-[#9A1715] font-poppins rounded-[8px] text-[16px] text-[#fff] uppercase w-[178px] h-[48px] font-medium text-center items-center flex justify-center leading-[48px]'>
                <img src="./img/dark-discord.png" alt="" className='mr-[6px] block dark:hidden' />
                    <img src="./img/discord.png" alt="" className='mr-[7px] dark:block hidden' />
                    Discord
                </button>
                <button className='ml-[10px] border-[#785c37] font-poppins bg-btn-wish w-[214px] h-[47px] uppercase text-base border-2  rounded-md font-medium text-[#ffffff]'>
                    WhiteList Now
                </button>
            </div>
            <div className='mt-[52px] max-w-[724px] mx-auto relative'>
                <input className='bg-[#D2D2D2] dark:bg-[#483C39] outline-none text-[#645E5E] dark:text-[#fff] capitalize text-[16px] rounded-[8px] w-full font-poppins font-bold h-[48px] pl-[20px] placeholder:text-[#645E5E] dark:placeholder:text-[#fff]' type="email" placeholder='Enter Your Email Id' />
                <button className='bg-[#000] dark:bg-[#E7B66A] w-[148px] h-[48px] absolute top-0 right-0 rounded-0 rounded-r-[8px] text-[16px] font-bold text-[#fff] dark:text-[#0D0202] uppercase font-poppins'>SubSCRIBE</button>
            </div>
            <div className='mt-[43px]'>

            </div>
        </div>
    )
}

export default Join