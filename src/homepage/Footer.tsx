import React from 'react'

function Footer() {
    return (
        <div className='bg-[#201B1B] h-[76px] leading-[76px]'>
            <div className='max-w-[1414px] mx-auto'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="./img/footer-logo.png" alt="" className='' />
                        <h5 className='text-[#fff] dark:text-[#E7B66A] font-poppins capitalize text-[18px] font-medium ml-[11px]'>chain Arena 2022 - ALL rights reserved</h5>
                    </div>
                    <div>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            Home
                        </a>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            About Us
                        </a>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            Road map
                        </a>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            Collection
                        </a>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            FAQS
                        </a>
                        <a href='#' className='text-[#fff] text-[18px] font-medium capitalize font-poppins ml-[30px]'>
                            Team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer