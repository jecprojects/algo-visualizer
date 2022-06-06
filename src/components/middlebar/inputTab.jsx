import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArrayValuesAction } from '../../redux/actions/getArrayValues';
// CSS
import './styles/inputTab.css';


const InputTab = (props) => {

    const dispatch = useDispatch();

    const [arrSize, setArrSize] = useState(0);
    const [arrLayout, setArrLayout] = useState('');
    const [arrValues, setArrValues] = useState('');
    const [resetClicked, setResetClicked] = useState(0);
    const [messageOnError, setMessageOnError] = useState(null);

    useEffect(() => {
        setArrSize(0);
        setArrLayout('');
        setArrValues('');
        setMessageOnError(null);
    },[resetClicked])   

    const runHandler = () => { // Function to check and filter the values and go to the Output Tab
        if(arrSize === 0){
            setMessageOnError('Enter valid array size!');
        }else if(arrLayout === ''){
            setMessageOnError('Select Layout Type!')
        }else if(arrValues === ''){
            setMessageOnError('Enter array values!')
        }else{
            // If all the inputs are ok time to verify and filter the input
            const result = arrValues.split(',').map(i => Number(i)); // Getting the number array.

            if(result.length != arrSize){
                setMessageOnError(`Enter ${arrSize} number of values!`);
            }else{ // After all check time to dispatch the values to store
                console.log(result);
                const obj = {
                    size: arrSize,
                    layout: arrLayout,
                    values: result
                }
                dispatch(getArrayValuesAction(obj))
                props.toggleTab();
            }
        }
    }

    return(
        <div className="user-input-box">
            <div className="arr-size-select">
                <label className="in-title">Array Size:</label>
                <select 
                    className="select-input"
                    value={arrSize}
                    onChange={e => setArrSize(e.target.value)}
                >
                    <option value={0}>size</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
            </div>


            <div className="arr-type-select">
                <label className="in-title">Array Layout:</label>
                <select 
                    className="select-input"
                    value={arrLayout}
                    onChange={e => setArrLayout(e.target.value)}
                >
                    <option value={''}>Select</option>
                    {/* <option value={'BAR'}>Bar</option> */}
                    <option value={'ARRAY'}>Array</option>
                </select>
            </div>

            <div className="arr-type-select">
                <label className="in-title">Array Values:</label>
                <input 
                    className="arr-input"
                    value={arrValues}
                    type="text"
                    placeholder={'Type multiple array values using comma( , ) separated'}
                    onChange={e => setArrValues(e.target.value)}
                />
            </div>

            <div className="buttons-div">
                <div className='buttons-group'>
                    <button onClick={runHandler} className="run-btn">Run</button>
                    <button onClick={prev => setResetClicked(prev+1)} className="reset-btn">Reset </button>
                </div>
                {       
                    messageOnError ? 
                        <div className='error-logs'><h4>{messageOnError}</h4></div>
                        : null
                }
            </div>


            <div className="helping-text">
                <label>You can choose array size of your own from the 
                    options. Moreover you can prioritize your visibility between Array and Bar. 
                    And then the last input is for the array values, enter all the values seperated 
                    using commas ( , ).
                </label>
            </div>
        </div>
    );
}

export default InputTab;