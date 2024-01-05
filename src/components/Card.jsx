import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Card({ review }) {

    return (
        <div className='text-center relative z-10'>
            <div className='flex mb-8'>
                <img src={review.image} alt=""
                    className='w-[120px] h-[120px] rounded-full 
                    absolute top-[-60px] shadow-lg   ring-violet-500 shadow-violet-500' />
            </div>

            <div>
                <p className='text-slate-950 text-2xl font-bold font-sans'>{review.name}</p>
                <p className='text-violet-400'>{review.job}</p>
            </div>
            <div className='flex justify-center mt-4'>
                <FaQuoteLeft className='text-violet-500' />
            </div>
            <div>
                <p className='text-slate-500 mt-4'>{review.text}</p>
            </div>
            <div className='flex justify-center mt-4'>
                <FaQuoteRight className='text-violet-500' />
            </div>
        </div>
    )
}

export default Card