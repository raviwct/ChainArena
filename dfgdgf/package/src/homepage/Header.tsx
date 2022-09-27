import React from 'react'

function Header() {
    return (
        <div className='bg-[#ffffff] dark:bg-[#000000] h-[95px] fixed w-full top-0 z-50'>
            <header className='max-w-[1414px] mx-auto w-full'>
                <div className='flex items-center justify-between pt-[11px]'>
                    <div>
                        <img src="./img/dark-Logo.png" alt="" className='block dark:hidden' />
                        <img src="./img/Logo.png" alt="" className='hidden dark:block' />
                    </div>
                    <div className='flex items-center max-w-[767px] w-full mx-auto justify-between'>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            Home
                        </a>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            About Us
                        </a>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            Road map
                        </a>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            Collection
                        </a>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            FAQS
                        </a>
                        <a href='#' className='text-[#000000] dark:text-[#fff] text-[16px] font-medium capitalize font-BakBakRegular'>
                            Team
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <button className='mr-[20px]'>
                            <img src="./img/dark.png" alt="" className='dark:block hidden' />
                            <img src="./img/light.png" alt="" className='dark:hidden block ' />
                        </button>
                        <button className='w-[148px] h-[48px] leading-[48px] bg-[#000000] dark:bg-[#9A1715] rounded-[6px] justify-center text-[#fff] text-[16px] font-medium uppercase flex items-center'>
                            <img src="./img/dark-discord.png" alt="" className='mr-[6px] block dark:hidden' />
                            <img src="./img/discord.png" alt="" className='mr-[6px] hidden dark:block' />
                            Discord
                        </button>
                        <button className='w-[148px] h-[48px] leading-[48px] ml-[20px] bg-[#D2D2D2] dark:bg-[#E7B66A] rounded-[6px] justify-center text-[#000] dark:text-[#30160F]  text-[16px] font-medium uppercase  flex items-center'>
                            <img src="./img/dark-wallet.png" alt="" className='mr-[6px] block dark:hidden' />
                            <img src="./img/wallet.png" alt="" className='mr-[6px]  hidden dark:block' />
                            Connect
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header