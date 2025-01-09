import React from 'react'
import './Nav.css'
import SideBarButton from './SideBarButton';

const Nav = props => (
    
        <nav >
            <img src="src/Images/schoollogo.jpeg" alt=""/>
            
            <ul>
            <li><a href="/">SHKOLLA</a></li>
            <li><a href="/AboutUs">RRETH SHKOLLES</a></li>
            <li><a href="#">PARALELET</a></li>
            <li><a href="/Events">EVENTET</a></li>
            <li><a href="#">GALERIA</a></li>
            <li><a href="#">MESIMDHENESIT</a></li>
            <li><a href="#">FAQET</a></li>
            <li><a href="/Contact">KONTAKTI</a></li>
            </ul>
            <div className="navbar-button">
                <SideBarButton click={props.drawerClickHandler}/>
            </div>
        </nav>
  )


export default Nav