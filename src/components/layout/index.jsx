import React from "react";
import { useSelector } from "react-redux";

// all components
import Sidebar from "../sidebar";
import Header from "../header";
import CodeSection from "../codesection";
import VisualizeDiv from "../visualize";
import LogsDiv from "../logsdiv";

/* Styles and Icons */
import './style.css';
import {FaGithub} from 'react-icons/fa';


const Layout = (props) => {

    const visual = useSelector(state => state.visual);
    
    return(
        <>
        {
            props.sidebar ? 
                <div className="body-bar">
                    <Sidebar/>
                    <div className="midbar">
                        <Header/>
                        <div className="mid-lower-bar">
                            <div className="mid-lower-left-bar">
                                <VisualizeDiv/>
                                <LogsDiv/>
                            </div>
                            <CodeSection/>
                        </div>
                        {/* {props.children} */}
                    </div>
                    <div className="universal-footer">
                        <a href="https://github.com/jecprojects/algo-visualizer" target="_blank"><FaGithub/></a>
                    </div>
                </div>
                :
                props.children
        }
        </>
    )
}

export default Layout;