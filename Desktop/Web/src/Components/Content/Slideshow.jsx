import React from 'react'
import './Slideshow.css'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

const slideImages = [
  {
    url: './src/images/kabineti_i_mjeksis.jpeg'

  },
  {
    url: 'https://www.youtube.com/watch?v=zE1qugX05Zc'
  },
];

const divStyle = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  backgroundSize: 'cover'
}


const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Fade> 
          {slideImages.map((image, index) =>(
            <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
              </div>
            </div>
          ))}
      </Fade>
    </div>
  )
}

export default Slideshow