import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="content">
        <div className="text">
            <h1>Mirësevini në IAAP "Fehmi Agani"</h1>
            <p>IAAP "Fehmi Agani" është shkollë e mesme e lartë profesionale e vendosur ne qytetin
                e Klines që synon ti aftësoj te rinjët në drejtimet <br/> më te kerkuara te tregut vendor dhe jo vetëm.
                Shkolla ofron standarte evropiane te shkollimit me paisje te teknologjis së fundit dhe kabinete te pothuajse gjdo 
                drejtimi, kuadrot e pergaditur e rrisin nivelin e arsimimit...
            </p>
        </div>
        <a href="/AboutUs"><button className="btn btn-1">Rreth Nesh</button></a>
    </div>
  )
}

export default AboutUs;