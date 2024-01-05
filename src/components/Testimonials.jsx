import React, { useState } from 'react'
import Card from './Card'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
function Testimonials({ reviews }) {
    const[index, setIndex] = useState(0);

    function leftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1)
        }
    }

    function rightHandler(){
        if(index + 1 > reviews.length -1){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    function randomHandler(){
        let res = Math.floor(Math.random() * reviews.length)
        setIndex(res);
    }

    return (
        <div className='w-[500px] h-[420px] 
    bg-white rounded-sm mt-10 p-4'>
            <Card review={reviews[index]} />

            <div className='flex justify-center gap-3 mb-5 mt-3'>
                <button className='bg-violet-500 rounded-full'
                onClick={leftHandler}>
                    <FaChevronLeft />
                </button>
                <button className='bg-violet-500 rounded-full'
                onClick={rightHandler}>
                    <FaChevronRight />
                </button>
            </div>
            <div className='flex justify-center'>
                <button className='bg-violet-700 '
                onClick={randomHandler}>Suprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials