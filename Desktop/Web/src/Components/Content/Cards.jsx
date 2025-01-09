import React from 'react'
import './Cards.css'
import { FaArrowRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="main">
     { /*<h1 className='h1'>Profilet</h1>*/}
      
      <div className="profilet">
        <div className="profili-1">
          <h1>Informatik</h1>
          <a href="/Drejtimi"> <FaArrowRight/></a>
        </div>
        <div className="profili-2">
          <h1>Infermieri</h1>
          <a href="/Drejtimi"> <FaArrowRight/></a>
        </div>
      </div>
      <a href="/Field"><button className="see-more">
        profilet
      </button></a>
    </div>
  )
}

export default Cards