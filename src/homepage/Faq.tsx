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
        <div className='bg-[#180A06]'>
            <div className='max-w-7xl mx-auto py-[80px]'>
                <h3 className='text-[#E7B66A] text-[55px] font-medium text-center uppercase mx-auto mb-[40px]'>
                    FAQ'S
                </h3>
                <div className='mt-[80px]'>
                    {faqList.map((items) =>
                        <div className='max-w-[990px] mx-auto bg-[#220C0D] p-10 mt-5 first:mt-0'>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className={faqShow ? "text-[#e7b66a] text-left text-[22px] font-normal capitalize" : "text-[#fff] text-left text-[22px] font-normal capitalize"}>
                                {/* <h1 className='text-[#fff] text-left text-[22px] font-normal capitalize'> */}
                                    {items.faqTitle}
                                </h1>

                                <button onClick={openFaq}>
                                    {faqShow

                                        ?
                                        <img className='cursor-pointer' src="./img/minus-faq.png" alt="" />

                                        :
                                        <img className='cursor-pointer' src="./img/plus.png" alt="" />

                                    }
                                </button>

                            </div>
                            {faqShow &&
                                <div className='border-t border-faq-row mt-[34px]'>
                                    <h3 className=' text-[#fff] text-[18px] mt-[34px] font-normal capitalize font-poppins'>{items.faqContent}</h3>
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