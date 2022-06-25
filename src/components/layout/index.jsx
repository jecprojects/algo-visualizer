import React from "react";
import { useSelector } from "react-redux";

// all components
import LeftBar from "../leftbar";
import MiddleBar from "../middlebar";
import RightBar from "../rightbar";
import Header from "../header";
import Footer from "../footer/footer";


/* Styles and Icons */
import './style.css';
import {FaGithub} from 'react-icons/fa';



const Layout = (props) => {

    
    return(
        <>
        {
            props.sidebar ? 
                <div className="body-bar">
                    <Header/>
                    <div className="layout-main-div">
                        <LeftBar/>
                        <MiddleBar/>
                        <RightBar/>
                    </div>
                    <Footer/>
                </div>
                :
                props.children
        }
        </>
    )
}

export default Layout;