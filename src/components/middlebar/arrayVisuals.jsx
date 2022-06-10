import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// CSS
import './styles/arrayVisuals.css';


const ArrayVisuals = (props) => {

    console.log(props);

    useEffect(() => {

        document.getElementById('array').innerHTML = ""; // Clearing the previous nodes

        for( let i = 0; i<props.arr.length; i++){
            let e = document.createElement('div');
            e.innerHTML = `${props.arr[i]}`
            e.classList.add('ar-ele-div')
            e.id = i+1
            if(props.compare && props.compare.includes(i)){ // coloring the compare divs
                e.classList.add('compare-divs')
            }
            if(props.swap && props.swap.includes(i)){ // coloring the swap divs
                e.classList.add('swap-divs')
            }
            if(props.passIndexs && props.passIndexs.includes(i)){ // coloring the passIndex divs
                e.classList.add('passIndex-divs')
            }
            document.getElementById('array').appendChild(e);
        }

    },[props.arr])

    return(
        <div id="array" className="array-visuals-div">
            
        </div>
    )
}

export default ArrayVisuals;