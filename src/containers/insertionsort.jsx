import React,{useEffect} from 'react';
import Layout from '../components/layout';

// Actions Import
import { getAlgorithmAction } from '../redux/actions/getalgo';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const InsertionSort = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if(location) dispatch(getAlgorithmAction(location.pathname));
    }, [location])

    return(
        <Layout sidebar></Layout>
    );
}

export default InsertionSort;