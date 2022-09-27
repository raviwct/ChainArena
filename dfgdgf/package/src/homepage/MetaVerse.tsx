import React from 'react'

function MetaVerse() {

    const metadata = [
        {
            listOne: "Tokenld",
            listTwo: "5030736"
        },
        {
            listOne: "Type",
            listTwo: "Small"
        },
        {
            listOne: "Sold",
            listTwo: "No"
        },
        {
            listOne: "Zone",
            listTwo: "ENT"
        },
        {
            listOne: "Size",
            listTwo: "82,366 M2"
        },
        {
            listOne: "Point Of Interest",
            listTwo: ""
        },
    ]

    return (
        <div className='bg-metaverse-light dark:bg-metaverse-bg bg-cover bg-no-repeat pt-[100px] pb-[95px]'>
            <div className='max-w-[1560px] mx-auto'>
                <div className="w-full">
                    <div>
                        <h3 className='text-[#000] dark:text-[#E7B66A] text-[55px] font-medium  uppercase mx-auto mb-[50 px]'>
                            Metaverse
                        </h3>

                        <div className='rounded-xl max-w-[795px] relative border border-[#000] dark:border-[#9A1715] pt-[27px] pr-[38px] pb-[26px] pl-[25px]'>
                            <div className='absolute w-full h-full bg-[#000] dark:bg-[#0F0103] opacity-100 dark:opacity-60 top-0 left-0 rounded-xl'></div>
                            <div className='md:flex relative'>
                                <img src="./img/rounded-view.png" alt="" className='md:w-auto w-full' />
                                <div className='w-full pl-[27px]'>
                                    {metadata.map((items) =>
                                        <div className='border-t border-[#fff] w-full py-2 flex justify-between first:border-0'>
                                            <h3 className='font-poppins text-[#fff] text-[19px] font-normal capitalize'>{items.listOne}:</h3>
                                            <h3 className='font-poppins text-[#fff] text-[19px] font-normal capitalize'>{items.listTwo}</h3>
                                        </div>
                                    )}
                                    <button className='w-[154px] h-[48px] rounded-[8px] text-[19px] text-[#000] dark:text-[#fff] dark:font-BakBakRegular capitalize font-normal bg-[#fff] dark:bg-[#9A1715]'>
                                        Volcano
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetaVerse