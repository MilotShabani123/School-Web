import './NavBar.css'
import Nav from './Nav';


const NavBar = props => (
    <div className="wrapper">
      <div className="paragraphs">
        <h1>NE SIGUROJMË NJË EDUKIM CILESOR <br/> PER NJE BOTE ME TE SIGURT</h1>
        <p>Edukata është ajo që mbetet kur njeriu harron atë që ka mësuar në shkollë.</p>
            
        <a href="/Apply"><button className="btn-1">FILLONI NJE EPOKE TE RE</button></a>
      </div>
      <div className="buttons">
        <a href="/Field"><button className='btn-3'> Drejtimet </button></a>
        <a href=""><button className='btn-3'>Lendet mesimore</button></a>
        <a href=""><button className='btn-3'>Bibloteka</button></a>
        <a href=""><button className='btn-3'>Praktike Profesionale</button></a>
        <a href=""><button className='btn-3'>Kabinetet</button></a>
      </div>
    </div>
 
);


export default NavBar;