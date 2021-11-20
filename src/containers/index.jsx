import React from 'react';

// Components
import Sidebar from '../components/sidebar/index';
import './style.css'

const HomeDiv = (props) => {
    return(
        <div className="home-main-div">
            <Sidebar/>
        </div>
    );
}

export default HomeDiv;