import React from 'react'

function Register() {
    return (
        <div className='bg-register-bg py-[80px]'>
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <h3 className='text-[#E7B66A] text-[55px] font-medium  max-w-[839px] uppercase mx-auto'>
                            Register For Free
                        </h3>
                        <p className='text-[19px] text-[#ffffff] font-poppins max-w-[1100px] mx-auto '>
                            Register for an account within minutes. Currently we only accept
                            registrations with metamask accounts
                        </p>
                        <div className='bg-[rgba(2, 2, 2, 0.6)] border border-[#7E5252] rounded-2xl px-[60px] py-[30px] mt-[35px]'>
                            <div className=''>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Email Address<sup>*</sup></label>
                                <input type="email" placeholder='Enter Email Address' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] px-6 py-2 w-full outline-none	' />
                            </div>
                            <div className='mt-[30px]'>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Password <sup>*</sup> </label>
                                <input type="password" placeholder='Enter Password' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] px-6 py-2 w-full outline-none	' />
                            </div>
                            <div className='mt-[30px]'>
                                <label className='block text-[18px] text-[#fff] capitalize font-normal font-poppins mb-[11px]'>Username <sup>*</sup></label>
                                <input type="text " placeholder='Enter Username' className='bg-input-bg font-normal font-poppins text-[#AAA9A9] capitalize text-[17px] px-6 py-2 w-full outline-none	' />
                            </div>
                            <div className='mt-[25px] flex'>
                                <button className='bg-[#9A1715] uppercase text-base px-5 py-3 border-2 border-[#9A1715] rounded-md text-[#ffffff] flex items-center'>
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