import React from 'react';
import { useSelector } from 'react-redux';
import ArrayVisuals from './arrayVisuals';
// CSS
import './styles/outputTab.css';
// ICONS
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const OutputTab = (props) => {

    const array = useSelector(state => state.arrayData);

    return(
        <div className='outPut-tab'>
            <div className='visual-section'>
                {
                    array.data && 
                        array.data.success ?
                            <ArrayVisuals data={array.data}/>
                            :
                            null
                }
            </div>
            <div className='visual-control-div'>
                <div className='status-showing-div'>
                    <label>Here is a visualization of the entire Quicksort process.</label>
                </div>
                <div className='status-control-div'>
                    <div className='arrow'><BsChevronLeft/></div>
                    <div className='step-count'><h3> 12/ </h3> 18 </div>
                    <div className='arrow'><BsChevronRight/></div>
                </div>
            </div>
        </div>
    )
}

export default OutputTab;