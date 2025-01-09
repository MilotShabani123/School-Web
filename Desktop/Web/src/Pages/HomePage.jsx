import React, { Component } from 'react'
import NavBar from '../Components/Headeer/NavBar'
import Nav from '../Components/Headeer/Nav'
import SideBar from '../Components/Headeer/SideBar'
import AboutUs from '../Components/Content/AboutUs'
import AfatiiAplikimit from '../Components/Content/AfatiiAplikimit'
import Footer from '../Components/Footer/Footer'
import BackDrop from '../Components/Headeer/BackDrop'
import Cards from '../Components/Content/Cards'
import Accordion from '../Components/Content/Accordion'
import Parttners from '../Components/Content/Parttners'

class HomePage extends Component {
    state = {
        sideBarOpen: false,
    };
    
    sideBarButtonClickHandler = () => {
    this.setState((prevState) => {
        return { sideBarOpen: !prevState.sideBarOpen };
    });
    };
    
    backDropClickHandler = () => {
    this.setState({ sideBarOpen: false })
    };


    render() {
        let backDrop;

        if (this.state.sideBarOpen) {
          backDrop = <BackDrop click={this.backDropClickHandler} />
        }
    
        return (
            <>
                {/*<Nav drawerClickHandler={this.sideBarButtonClickHandler}/>*/}
                <NavBar />
                <SideBar show={this.state.sideBarOpen} click={this.backDropClickHandler}/>
                {backDrop}
                <AboutUs/>
                <Cards/>
                <AfatiiAplikimit/>
                <Parttners/>
                <Accordion/>
            </>
        )
    }
}

export default HomePage