import React from 'react'
import { useState } from 'react'
import iconMinus from '../assets/icon-minus.svg'
import iconPlus from '../assets/icon-minus.svg'
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
        //console.log(isExpanded)

        return <div key={idx}>
            <p className='px-2 py-2' onClick={()=> handleClick(idx)}>{data.label}</p>
            {isExpanded && <p>{data.content}</p>}
        </div>
    })

  return (
    <div className="border rounded w-100 h-100 py-2 px-2 bg-white">
    <div className="flex align-center">
        <img src={iconStar}></img>
        <h1 className="text-dark-purple text-2xl py-1 ml-3">FAQ</h1>
    </div>
    <div>{renderedData}</div>
    </div>
  )
}

