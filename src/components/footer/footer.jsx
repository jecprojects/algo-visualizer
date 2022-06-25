import React from 'react';
// CSS
import './style.css';
// papers
import { PaperLinks } from '../../core/papers';
import {VscReferences} from 'react-icons/vsc';


const Footer = () => {
    return(
        <div className='footer-div'>
            <div className='f-main-div'>
                <div className='footer-div-heading'>
                    <h3>References:</h3>
                </div>
                <div className='paper-links'>
                    {
                        PaperLinks.map(p => {
                            return <a href={p.link} target='_blank'><span><VscReferences/> </span>{p.title}</a>
                        })
                    }
                </div>
            </div>

            <div className='f-main-div'>
                <div className='footer-div-heading'>
                    <h3>GITHUB REP:</h3>
                </div>
                <div className='paper-links'>
                    <a href='https://github.com/jecprojects/algo-visualizer' target='_blank'>Visualizer</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;