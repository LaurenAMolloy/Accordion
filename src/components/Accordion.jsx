import React from 'react'
import { useState } from 'react'


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
            <p onClick={()=> handleClick(idx)}>{data.label}</p>
            {isExpanded && <p>{data.content}</p>}
        </div>
    })

  return (
    <div>{renderedData}</div>
  )
}

