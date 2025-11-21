import React from 'react'
import { useState } from 'react'
import iconMinus from '../assets/icon-minus.svg'
import iconPlus from '../assets/icon-plus.svg'
import iconStar from '../assets/icon-star.svg'



export default function Accordion({faqData}) {
    //-1 closed
    //1 open 
    //2 open
    const[expandedIndex, setExpandedIndex] = useState(-1);
    

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentIndex) => {
            if(currentIndex === nextIndex){
                //close accordion
                return -1
            } return nextIndex
        });
    }

    const renderedData = faqData.map((data, idx) => {

        const isExpanded = idx === expandedIndex
        console.log(isExpanded)

        return <div className='py-5' key={idx}>
            <div className='flex justify-between px-5 py-2 font-semibold hover:text-medium-purple'> 
            {data.label}
            {isExpanded ? <img className='' src={iconMinus} onClick={()=> handleClick(idx)}></img> :
                <img className='' src={iconPlus} onClick={()=> handleClick(idx)}></img>
            } 
            </div>

            <div
                className={`
                px-3 text-medium-purple
                overflow-hidden
                transition-all duration-500 ease-in-out
                ${isExpanded ? "max-h-50" : "max-h-0"}
                `}
            >
                <p className={
                    `pb-4 transition-all delay-150 duration-500 ease-in-out
                    ${isExpanded ? "opacity-100" : "opacity-0"}`}>{data.content}</p>
           
            {idx !== faqData.length -1 && (
                <div className='border-b border-light-purple mx-5'></div>
            )} 
            </div>
            
        </div>
    })

  return (
    <div className="w-5/6 md:w-lg rounded py-2 px-2 bg-white">
    <div className="flex align-center pt-5">
        <img src={iconStar}></img>
        <h1 className="text-dark-purple font-bold text-2xl py-1 ml-3">FAQs</h1>
    </div>
    <div>{renderedData}</div>
    </div>
  )
}

