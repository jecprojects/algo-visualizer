import React from 'react';
import Layout from '../components/layout';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const BubbleSort = () => {
    const location = useLocation();
    console.log(location.pathname)
    const dispatch = useDispatch();


    return(
        <Layout sidebar>
            Hello Bubble Srt
        </Layout>
    );
}

export default BubbleSort;