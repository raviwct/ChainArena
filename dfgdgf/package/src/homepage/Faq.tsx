import React, { useState } from 'react'

function Faq() {
    const [faqShow, setFaqShow] = useState(false);
    const faqList = [
        {
            faqTitle: "What are the NFTs?",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
        {
            faqTitle: "How Do I Ger NFTs?",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
        {
            faqTitle: "How Can We Buy Your NFTs?",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
        {
            faqTitle: "Who Are The Team Behind The Project ?",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
        {
            faqTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
        {
            faqTitle: "Nulla facilisi. Quisque augue eros, finibus ut est in",
            faqContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat",
            faqShow: false
        },
    ]

    const openFaq = (index : any) => {
        setFaqShow(!faqShow)
    }

    return (
        <div className='bg-[#F5F5F5] dark:bg-[#180A06]'>
            <div className='max-w-7xl mx-auto pt-[100px] pb-[180px]'>
                <h3 className='text-[#E7B66A] text-[55px] font-medium text-center uppercase mx-auto mb-[40px]'>
                    FAQ'S
                </h3>
                <div className='mt-[80px]'>
                    {faqList.map((items) =>
                        <div className='max-w-[990px] mx-auto bg-[#fff] dark:bg-[#220C0D] p-[30px] mt-[31px] first:mt-0'>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className={faqShow ? "text-[#000] dark:text-[#e7b66a] text-left text-[22px] font-normal capitalize" : "text-[#000] dark:text-[#fff] text-left text-[22px] font-normal capitalize"}>
                                {/* <h1 className='text-[#fff] text-left text-[22px] font-normal capitalize'> */}
                                    {items.faqTitle}
                                </h1>

                                <button onClick={openFaq} className=" hidden dark:block">
                                    {faqShow

                                        ?
                                        <img className='cursor-pointer ' src="./img/minus-faq.png" alt="" />

                                        :
                                        <img className='cursor-pointer' src="./img/plus.png" alt="" />

                                    }
                                </button>


                                <button onClick={openFaq} className="block dark:hidden ">
                                    {faqShow

                                        ?
                                        <img className='cursor-pointer ' src="./img/light-minus.png" alt="" />

                                        :
                                        <img className='cursor-pointer' src="./img/light-plus.png" alt="" />

                                    }
                                </button>

                            </div>
                            {faqShow &&
                                <div className='border-t border-[#D2D2D2] dark:border-faq-row mt-[34px]'>
                                    <h3 className=' text-[#000] dark:text-[#fff] text-[18px] mt-[34px] font-normal capitalize font-poppins'>{items.faqContent}</h3>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Faq