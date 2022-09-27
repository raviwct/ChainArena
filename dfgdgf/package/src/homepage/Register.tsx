import React from 'react'

function Register() {
    return (
        <div className='bg-[#F0F0F0] dark:bg-register-bg pt-[35px] pb-[36px] bg-cover bg-no-repeat'>
            <div className='max-w-[1560px] mx-auto'>
                <div className="grid lg:grid-cols-2 gap-2">
                    <div>
                        <h3 className='text-[#000] dark:text-[#E7B66A] text-[55px] font-medium  max-w-[839px] uppercase mx-auto'>
                            Register For Free
                        </h3>
                        <p className='text-[19px] text-[#000] dark:text-[#ffffff] font-poppins  max-w-[624px] mt-[20px]'>
                            Register for an account within minutes. Currently we only accept
                            registrations with metamask accounts
                        </p>
                        <div className='bg-[#020202] opacity-80 dark:opacity-100 dark:bg-form-bg border border-[#7E5252] max-w-[740px] rounded-2xl pt-[36px] pr-[77px] pb-[58px] pl-[64px] mt-[44px]'>
                            <div className=''>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Email Address<sup>*</sup></label>
                                <input type="email" placeholder='Enter Email Address' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] h-[51px] pl-[24px] w-full outline-none	' />
                            </div>
                            <div className='mt-[27px]'>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Password <sup>*</sup> </label>
                                <input type="password" placeholder='Enter Password' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] h-[51px] pl-[24px] w-full outline-none	' />
                            </div>
                            <div className='mt-[27px]'>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Username <sup>*</sup></label>
                                <input type="text " placeholder='Enter Username' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] h-[51px] pl-[24px] w-full outline-none	' />
                            </div>
                            <div className='mt-[30px] flex'>
                                <button className='bg-[#fff] dark:bg-[#9A1715] uppercase text-base w-[179px] h-[47px] border-2 border-[#9A1715] rounded-md text-[#000] dark:text-[#ffffff] flex justify-center items-center'>
                                    <img src="./img/fox.png" alt="" className='mr-2' />Metamase
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./img/register.png" alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register