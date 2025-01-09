import React from 'react'
import './Parttners.css'

const Parttners = () => {
    const images = [
        {
            image: './src/images/logo/telkos.jpg',
            link: ''
        },
        {
            image: './src/images/logo/lordB.jpg',
            link: ''
        },
        {
            image: './src/images/logo/askontogroup.jpg',
            link: ''
        },
        {
            image: './src/images/logo/bujarelectronics.jpg',
            link: ''
        },
        {
            image: './src/images/logo/solidarsuisse.jpg',
            link: ''
        },
    ]
  return (
    <div className="img-container">
        {images.map((image) => {
            return(
                <a href={image.link}>
                    <img src={image.image} alt="" />
                </a>
            )
        })}
           
    </div>
  )
}

export default Parttners