import React, { useState, useEffect } from 'react';
// CSS
import './styles/inputTab.css';


const InputTab = (props) => {
    const [arrSize, setArrSize] = useState(0);
    const [arrLayout, setArrLayout] = useState('');
    const [arrValues, setArrValues] = useState('');
    const [resetClicked, setResetClicked] = useState(0);

    useEffect(() => {
        setArrSize(0);
        setArrLayout('');
        setArrValues('');
    },[resetClicked])   

    const runHandler = () => { // Function to go to the Output Tab
        props.toggleTab();
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
                    <option value={'BAR'}>Bar</option>
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
                <button onClick={runHandler} className="run-btn">Run</button>
                <button onClick={prev => setResetClicked(prev+1)} className="reset-btn">Reset </button>
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