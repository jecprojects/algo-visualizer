import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// CSS
import './styles/insertionSortVisuals.css';


const InsertionSortVisuals = (props) => {

    useEffect(() => {

        document.getElementById('is-array').innerHTML = ""; // Clearing the previous nodes
        
        let i = 0;

        if(props.update.length != 0){
            while(i<props.arr.length){

                let min = Math.min(...props.update);
                let max = Math.max(...props.update);

                if(i>=min && i<=max){
                    let eUpdate = document.createElement('div');
                    eUpdate.classList.add('is-eUpdate-big-div')
                    eUpdate.setAttribute('id', 'epdateID');

                    document.getElementById('is-array').appendChild(eUpdate);

                    while(i<=max){
                        let e = document.createElement('div');
                        let eTop = document.createElement('div');

                        e.classList.add('is-ele-div')
                        eTop.innerHTML = `${props.arr[i]}`

                        eTop.classList.add('is-ar-top-ele-div')
                        eTop.id = i+1

                        e.classList.add('is-update-div')
                        eTop.classList.add('is-update-div-top')

                        e.appendChild(eTop)

                        document.getElementById('epdateID').appendChild(e);
                        i++;

                    }
                    i = max;
                    
                }else{
                    let e = document.createElement('div');
                    let eTop = document.createElement('div');
        
                    e.classList.add('is-ele-div')
                    eTop.innerHTML = `${props.arr[i]}`
        
                    eTop.classList.add('is-ar-top-ele-div')
                    eTop.id = i+1
        
                    e.appendChild(eTop)
        
                    document.getElementById('is-array').appendChild(e);

                    if(props.swap && props.swap.includes(i)){ // coloring the swap div
                        eTop.classList.add('is-swap-divs')
                    }
                    
                }

                i++;
            }
        }else if(props.toBeSwap != null){
            while(i<props.arr.length){
                let e = document.createElement('div');
                let eTop = document.createElement('div');
    
                e.classList.add('is-ele-div')
                eTop.innerHTML = `${props.arr[i]}`
    
                eTop.classList.add('is-ar-top-ele-div')

                if(i === props.toBeSwap){
                    eTop.setAttribute('id', 'targetNodeID');
                }else{
                    eTop.id = i+1
                }
    
                e.appendChild(eTop)
    
                document.getElementById('is-array').appendChild(e);

                if(props.swap && props.swap.includes(i)){ // coloring the swap div
                    eTop.classList.add('is-swap-divs')
                }

                i++
            }
        }else{
            while(i<props.arr.length){
                let e = document.createElement('div');
                let eTop = document.createElement('div');
    
                e.classList.add('is-ele-div')
                eTop.innerHTML = `${props.arr[i]}`
    
                eTop.classList.add('is-ar-top-ele-div')
                eTop.id = i+1
    
                e.appendChild(eTop)
    
                document.getElementById('is-array').appendChild(e);

                if(props.swap && props.swap.includes(i)){ // coloring the swap div
                    eTop.classList.add('is-swap-divs')
                }

                i++
            }
        }


    },[props.arr])


    return(
        <>
            <div id="is-array" className="is-array-visuals-div"></div>
            <div className="array-indexes">
                {
                    props.arr.map((value, key) => {
                        return<div>{key}</div>
                    })
                }
            </div>

            <div className="key-ele-div">
                {
                    props.keyElm && <>
                            <h3>Key Element:</h3>
                            <div id='keyNodeID' className="key-div">{props.keyElm}</div>
                        </>
                }
            </div>
        </>

    )
}

export default InsertionSortVisuals;