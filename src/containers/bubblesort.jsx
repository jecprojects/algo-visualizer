import React, { useEffect } from 'react';
import Layout from '../components/layout';

// Actions Import
import { getAlgorithmAction } from '../redux/actions/getalgo';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const BubbleSort = () => {
    const location = useLocation();
    console.log(location.pathname)
    const dispatch = useDispatch();

    useEffect(() => {
        if(location) dispatch(getAlgorithmAction(location.pathname));
    }, [location])

    return(
        <Layout sidebar></Layout>
    );
}

export default BubbleSort;