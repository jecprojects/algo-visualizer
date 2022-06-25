import React from "react";
import { useLocation } from 'react-router-dom';

// all components
import LeftBar from "../leftbar";
import MiddleBar from "../middlebar";
import RightBar from "../rightbar";
import Header from "../header";
import Footer from "../footer/footer";


/* Styles and Icons */
import './style.css';



const Layout = (props) => {
    const location = useLocation();
    
    return(
        <>
        {
            props.sidebar ? 
                <div className="body-bar">
                    <Header/>
                    <div className="layout-main-div">
                        <LeftBar/>
                        {
                            location.pathname === 'bfs' || location.pathname === 'dfs' ?
                            <label>Not Ready Yet!</label>
                            :
                            <MiddleBar/>
                        }
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