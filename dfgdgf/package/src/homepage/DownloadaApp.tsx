import React from 'react'

function DownloadaApp() {
    return (
        <div className='bg-cover bg-no-repeat bg-[#fff] dark:bg-app-bg pt-[227px] pb-[143px]'>
            <div className='bg-[#F5F5F5] dark:bg-[#010101] py-[151px] px-[46px] max-w-[1410px] mx-auto relative rounded-[30px]'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <img src="./img/mobile.png" alt="" className='absolute -top-[110px] left-[97px]'/>
                    </div>
                    <div>
                        <h3 className='text-[40px] text-[#000] dark:text-[#fff] text-normal '>Let’s download free from
                            apple and play store</h3>
                        <p className='mt-[11px] text-[18px] text-[#000] dark:text-[#fff] font-normal font-poppins'> Instant free download from apple and play store orem Ipsum is simply dummy text of the printing.</p>
                        <div className='flex mt-[15px]'>
                            <button>
                                <img src="./img/app-store.png" alt="" />
                            </button>
                            <button className='ml-3'>
                                <img src="./img/play-store.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadaApp