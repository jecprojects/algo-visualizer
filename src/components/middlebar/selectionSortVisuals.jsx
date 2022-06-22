import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import './styles/selectionSortVisuals.css';


const SelectionSortVisuals = (props) => {

    useEffect(() => {
        document.getElementById('ss-array').innerHTML = ''; // Clearing the previous nodes

        let i = 0;

        while(i<props.arr.length){
            let e = document.createElement('div');
            let eTop = document.createElement('div');

            e.classList.add('ss-ele-div')
            eTop.innerHTML = `${props.arr[i]}`

            eTop.classList.add('ss-ar-top-ele-div')
            eTop.id = i+1

            e.appendChild(eTop)
            document.getElementById('ss-array').appendChild(e);

            if(props.minIndx != null && props.minIndx === i){ // coloring the swap div
                eTop.classList.add('ss-minIndx-divs')
            }
            if(props.compare && props.compare.includes(i)){ // coloring the swap div
                eTop.classList.add('ss-compare-divs')
            }

            if(props.swap && props.swap.includes(i)){ // coloring the swap div
                eTop.classList.add('ss-swap-divs')
            }

            if(props.passIndexs && props.passIndexs.includes(i)){ // coloring the passIndex divs
                eTop.classList.add('passIndex-divs')
            }

            i = i+1;
        }
    })

    return(
        <>
            <div id='ss-array' className='ss-array-visual-div'></div>
            <div className='array-indexes'>
                {
                    props.arr.map((value, key) => {
                        return<div>{key}</div>
                    })
                }
            </div>
        </>
    )
}

export default SelectionSortVisuals;