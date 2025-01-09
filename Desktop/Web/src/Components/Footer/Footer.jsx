import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <ul>
          <h1>Shkolla</h1>
          <li><a href="/">Shkolla</a></li>
          <li><a href="/AboutUs">Rreth Shkolles</a></li>
          <li><a href="#">Lendet Mesimore</a></li>
          <li><a href="#">Praktika Profesionale</a></li>
        </ul>
        <ul>
          <h1>Karriera</h1>
          <li><a href="#">Bibloteka</a></li>
          <li><a href="/Events">Eventet</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Qendra e Krrieres</a></li>
        </ul>
        <ul>
          <h1>Drejtimet</h1>
          <li><a href="/Field">Drejtimet</a></li>
          <li><a href="#">Paralelet</a></li>
          <li><a href="#">Kabinetet</a></li>
          <li><a href="#">Mesimdhenesit</a></li>
        </ul>
        <ul>
          <h1>Kontakti</h1>
          <li><a href="#">Faqet</a></li>
          <li><a href="#">Politikat e Privatesis</a></li>
          <li><a href="">contact@shkolla.com</a></li>
          <li>Mundesuar nga Milot Shabani</li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 All RIGHTS RESERVED</p>
        <div className='icons'>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100083601150701"><FaFacebook/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer