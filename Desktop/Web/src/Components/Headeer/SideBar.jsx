import React from 'react'
import './SideBar.css'
import { LiaSchoolSolid } from "react-icons/lia";
import { FaChevronRight } from "react-icons/fa";

const SideBar = props => {
    let sideBarClases = 'sidebar'
    if (props.show) {
        sideBarClases = 'sidebar open'
    }

    return (
        <div className={sideBarClases}>
            <div className="icons" onClick={props.click}>
                <i>
                    <LiaSchoolSolid />
                </i>
                <h1>
                    <FaChevronRight />
                </h1>     
            </div>
            <ul>
                <li><a href="/">SHKOLLA</a></li>
                <li><a href="#">RRETH SHKOLLES</a></li>
                <li><a href="#">PARALELET</a></li>
                <li><a href="/Events">EVENTET</a></li>
                <li><a href="#">GALERIA</a></li>
                <li><a href="#">MESIMDHENESIT</a></li>
                <li><a href="#">FAQET</a></li>
                <li><a href="/Contact">KONTAKTI</a></li>
            </ul>
            <div className="sidebarfotter">
                <p>All RIGHTS RESERVED</p>
                <p>Desinged by Milot Shabani</p>
            </div>
        </div>
    )
};

export default SideBar;