import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// CSS
import './styles/bubbleSortVisuals.css';


const BubbleSortVisuals = (props) => {

    useEffect(() => {

        document.getElementById('array').innerHTML = ""; // Clearing the previous nodes
        
        let i = 0;
        while( i<props.arr.length){

            if(props.compare && props.compare.includes(i)){ // coloring the compare divs
                
                let e = document.createElement('div');
                e.classList.add('ele-div')

                props.compare.map(indx => {
                    let eTop = document.createElement('div');
                    eTop.innerHTML = `${props.arr[indx]}`
                    eTop.classList.add('ar-top-ele-div')
                    eTop.id = indx+1 
                    eTop.classList.add('compare-divs')

                    e.appendChild(eTop)
                    document.getElementById('array').appendChild(e);

                    if(props.passIndexs && props.passIndexs.includes(indx)){ // coloring the passIndex divs
                        eTop.classList.add('passIndex-divs')
                    }
                })

                i = i+2;

            }else if(props.swap && props.swap.includes(i)){ // coloring the swap divs

                let e = document.createElement('div');
                e.classList.add('swap-ele-div')

                props.swap.map(indx => {
                    let eTop = document.createElement('div');
                    eTop.innerHTML = `${props.arr[indx]}`
                    eTop.classList.add('ar-top-ele-div')
                    eTop.id = indx+1 
                    eTop.classList.add('swap-divs')

                    e.appendChild(eTop)
                    document.getElementById('array').appendChild(e);

                    if(props.passIndexs && props.passIndexs.includes(indx)){ // coloring the passIndex divs
                        eTop.classList.add('passIndex-divs')
                    }
                })

                i = i+2;
            }else{
                let e = document.createElement('div');
                let eTop = document.createElement('div');
    
                e.classList.add('ele-div')
                eTop.innerHTML = `${props.arr[i]}`
                
                eTop.classList.add('ar-top-ele-div')
                eTop.id = i+1 

                e.appendChild(eTop)
                document.getElementById('array').appendChild(e);

                if(props.passIndexs && props.passIndexs.includes(i)){ // coloring the passIndex divs
                    eTop.classList.add('passIndex-divs')
                }

                i = i+1;
            }

        }

    },[props.arr])

    return(
        <>
            <div id="array" className="array-visuals-div"></div>
            <div className="array-indexes">
                {
                    props.arr.map((value, key) => {
                        return<div>{key}</div>
                    })
                }
            </div>
        </>

    )
}

export default BubbleSortVisuals;