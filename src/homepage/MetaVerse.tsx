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
        <div className='bg-metaverse-bg bg-cover bg-no-repeat py-[80px]'>
            <div className='max-w-7xl mx-auto'>
                <div className="w-full">
                    <div className='w-3/5'>
                        <h3 className='text-[#E7B66A] text-[55px] font-medium  max-w-[839px] uppercase mx-auto mb-[40px]'>
                            Metaverse
                        </h3>

                        <div className='rounded-xl relative border border-[#9A1715] p-2'>
                            <div className='absolute w-full h-full bg-[#0F0103] opacity-60 top-0 left-0 rounded-xl'></div>
                            <div className='flex relative'>
                                <img src="./img/rounded-view.png" alt="" className='' />
                                <div className='w-full px-4'>
                                    {metadata.map((items) =>
                                        <div className='border-b border-[#fff] w-full py-2 flex justify-between last:border-0'>
                                            <h3 className='font-poppins text-[#fff] text-[19px] font-normal capitalize'>{items.listOne}:</h3>
                                            <h3 className='font-poppins text-[#fff] text-[19px] font-normal capitalize'>{items.listTwo}</h3>
                                        </div>
                                    )}
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