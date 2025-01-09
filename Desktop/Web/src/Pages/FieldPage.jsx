import React from 'react'
import './FieldPage.css'
import Cards from '../Components/Content/Cards'
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from 'react'

const FieldPage = () => {
  const [cards, setCards] = useState([
    {
      id: '1',
      title: "Informatik",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/Programming.jpg",
      link: "",
      color: "",
    },
    {
      id: '2',
      title: "Infermjeri",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/medschool.jpg",
      link: "",
      color: "",
    },
    {
      id: '3',
      title: "Instalues elektrik",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/Electrical.jpg",
      link: "",
      color: "",
    },
    {
      id: '4',
      title: "Instalues te ujit dhe ngrohjes qendrore",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/Home-Plumbing-Systems.jpg",
      link: "",
      color: "",
    },
    {
      id: '5',
      title: "Mekatronik",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/mechatronics.jpg",
      link: "",
      color: "",
    },
    {
      id: '6',
      title: "Trafik rrugor",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/Road-trafficc.jpg",
      link: "",
      color: "",
    },
    {
      id: '7',
      title: "Makineri",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/machanical engineering.jpg",
      link: "/Events",
      color: "",
    },
    {
      id: '8',
      title: "Rrobaqepsi",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/dressmaker.jpeg",
      link: "/Events",
      color: "",
    },
    {
      id: '9',
      title: "Ndertimtari",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/builder.jpg",
      link: "/Events",
      color: "",
    },
    {
      id: '10',
      title: "Automekanik",
      paragraphs: "Informatika eshte nje nder drejtimet me te kerkuara dhe profitabile si ne tregun vendor ashtu edhe ne ate nderkombetar duke i bere ekspertet e ksaj fushe me te kerkuarit nga te gjitha inxhinjerit...",
      image: "./src/images/Autorepair.jpg",
      link: "/Events",
      color: "",
    },
  ])



  return (
    <>
      <header>
      <h1>Drejtimet</h1>
      </header>
      <div className="map-holder">
            <div className="card">
              <img src="./src/images/Programming.jpg" alt="">
              </img>
              <a href="">
                <BsArrowRightShort/>
              </a>
            </div>
      </div>
    </>
  )
}

export default FieldPage