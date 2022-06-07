import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneratingStepsAction } from "../../redux/actions/generatingSteps";
// CSS
import './styles/arrayVisuals.css';


const ArrayVisuals = (props) => {

    const dispatch = useDispatch();
    const algorithm = useSelector(state => state.algorithm);

    useEffect(() => {

        dispatch(GeneratingStepsAction(props.data, algorithm.algoName)) // dispatch for Generating Steps 

        for( let i = 0; i<props.data.size; i++){
            let e = document.createElement('div');
            e.innerHTML = `${props.data.values[i]}`
            e.classList.add('ar-ele-div')
            e.id = i+1
            document.getElementById('array').appendChild(e);
        }

    },[])

    return(
        <div id="array" className="array-visuals-div">
            
        </div>
    )
}

export default ArrayVisuals;