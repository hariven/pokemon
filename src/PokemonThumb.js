import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PokemonThumb = ({image, name, id }) => {
    // const style = type + " thumb-container";
    return (
        
        <span className=' align-center'>
        <div className=' m-0'>
            <div className="number"><small>#0{id}</small></div>
           <img className='w-[140px] h-[130px] lg:w-[180px] md:w-[180px] sm:w-[80px]' src={image} alt={name} />
            <div className="detail-wrapper ">
                <h3 className='text-[20px] text-center font-medium'>{name}</h3>
                {/* <small>Type: {type}</small> */}
            </div> 
        </div></span>
        
    )
}

export default PokemonThumb