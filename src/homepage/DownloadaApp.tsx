import React from 'react'

function DownloadaApp() {
    return (
        <div className='bg-cover bg-no-repeat bg-app-bg pt-[200px] pb-[80px]'>
            <div className='bg-[#010101] py-[150px] px-[60px] max-w-7xl mx-auto relative'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <img src="./img/mobile.png" alt="" className='absolute -top-[120px]'/>
                    </div>
                    <div>
                        <h3 className='text-[40px] text-[#fff] text-normal '>Let’s download free from
                            apple and play store</h3>
                        <p className='mt-[11px] text-[18px] text-[#fff] font-normal font-poppins'> Instant free download from apple and play store orem Ipsum is simply dummy text of the printing.</p>
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