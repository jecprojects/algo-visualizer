import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { getAlgorithmAction } from '../redux/actions/getalgo';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SelectionSort = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if(location) dispatch(getAlgorithmAction(location.pathname));
    }, [location])

    return(
        <Layout sidebar>
            Hello selection Srt
        </Layout>
    );
}

export default SelectionSort;