import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import './styles/selectionSortVisuals.css';


const SelectionSortVisuals = (props) => {

    useEffect(() => {
        document.getElementById('ss-array').innerHTML = ''; // Clearing the previous nodes

        let i = 0;

        if(props.swap.length != 0){
            while(i<props.arr.length){
                let min = Math.min(...props.swap);
                let max = Math.max(...props.swap)

                if(i>=min && i<=max){
                    let eSwap = document.createElement('div');
                    eSwap.classList.add('eswap-big-div')
                    eSwap.setAttribute('id', 'eSwapID') // Setting id to the big div

                    document.getElementById('ss-array').appendChild(eSwap);


                    let topSwapDiv = document.createElement('div');
                    topSwapDiv.classList.add('top-Swap-Div');
                    topSwapDiv.setAttribute('id', 'topSwapID');


                    document.getElementById('eSwapID').appendChild(topSwapDiv);

                    while(i<=max){
                        let e = document.createElement('div');
                        let eTop = document.createElement('div');

                        e.classList.add('ss-ele-div')
                        eTop.innerHTML = `${props.arr[i]}`

                        eTop.classList.add('ss-ar-top-ele-div')
                        eTop.id = i+1

                        e.appendChild(eTop)

                        if(i === min || i === max){
                            let psudoDiv = document.createElement('div');
                            psudoDiv.classList.add('ss-psudo-ele-div');

                            document.getElementById('eSwapID').appendChild(psudoDiv);
                            e.classList.add('ss-swap-ele')
                            eTop.classList.add('ss-swap-ele-color')
                            document.getElementById('topSwapID').appendChild(e);
                        }else{
                            document.getElementById('eSwapID').appendChild(e);
                        }

                        i++;
                    }
                    
                    // Setting a fixed width to the topSwapDiv
                    document.getElementById('topSwapID').style.setProperty('width', `calc(${(max-min)*3}px + ${(max-min+1)*4}rem)`)

                    i = max 

                }else{
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
                    if(props.passIndexs && props.passIndexs.includes(i)){ // coloring the passIndex divs
                        eTop.classList.add('passIndex-divs')
                    }
                }
                i = i+1 // increment 
            }
        }else{
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
                if(props.passIndexs && props.passIndexs.includes(i)){ // coloring the passIndex divs
                    eTop.classList.add('passIndex-divs')
                }

                i = i+1 // increment 
            }
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