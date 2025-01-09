import React from 'react'
import './Accordion.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { useState } from 'react'

const Accordion = () => {
    const data =[
        {
            id: '1',
            question: 'Kush mund të aplikoj ?',
            answer: 'Të gjithë përsonat qe kanë shtetasinë e Republikës së Kosovës dhe që kanë përfunduar shkollimin fillore dhe të mesëm të ultë mund të aplikojn për shkollim te mesëm të lart.'
        },
        {
            id: '2',
            question: 'A mund të aplikoj online ?',
            answer: 'Momentalisht aplikimi mund të bëhet vetëm fizikisht në IAAP "Fehmi Agani"  në Klinë, përgjat afatit të përcaktuar nga ministrija e arsimit.'
        },
        {
            id: '3',
            question: 'Çfarë dokumentash duhen për aplikim ?',
            answer: 'Për aplikim në nivelin e shkollimit të mesëm të lart duhet të keni me vete një dokument identifikues (çertifikatë të lindjes ose ekstrakt) dhe dëftesën e klasës 6 deri 9.'
        },
        {
            id: '4',
            question: 'A duhet ti nënshtrohemi testit pranues ?',
            answer: 'Jo nuk duhet ti nënshtroheni një testi pranues por vetëm duhet te plotesoni kriterin e notave të lëndëve dhe të sjelljes varësisht nga profili dhe drejtimi.'
        },
    ]

    const [selected, setSelected] = useState(null);

    const toggleButton = (i) => {
        if (selected == i ) {
            return setSelected(null)
        }

        setSelected(i)
    }


  return (
    <div className="wraper">
        <div className='accordion'>
            {data.map((item, i) => {
                return (
                        <div className="item" key={item.id}>
                            <div className="title"   onClick={() => toggleButton(i)}>
                                <h1>{item.question}</h1>
                                <span className='icon'>
                                    {selected == i ?  <FaChevronUp/> :<FaChevronDown/>}
                                </span>
                            </div>
                            <div className={selected == i ? 'content-open' : 'content'}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                )
            })}
        </div>
           
    </div>
   
  )
}

export default Accordion