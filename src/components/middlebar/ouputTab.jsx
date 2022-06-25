import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { GeneratingStepsAction } from "../../redux/actions/generatingSteps";
// Algorithm Visuals
import BubbleSortVisuals from './bubbleSortVisuals';
import SelectionSortVisuals from './selectionSortVisuals';
import InsertionSortVisuals from './insertionSortVisuals';
// CSS
import './styles/outputTab.css';
// ICONS
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const OutputTab = (props) => {

    // Getting the current location from browser url
    const location = useLocation();

    const dispatch = useDispatch();

    const array = useSelector(state => state.arrayData);
    const algorithm = useSelector(state => state.algorithm);
    const generatedSteps = useSelector(state => state.generatedSteps);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(null);
    const [stepLength, setStepLength] = useState(null);

    const filterSort = () => { // Filter algorithm visualization
        switch (location.pathname) { // location.pathname will grab the current subpath from url. '/bubble-sort'
            case '/bubble-sort':
                return  <BubbleSortVisuals 
                            arr={currentStep.arr} 
                            compare={currentStep.compare} 
                            swap={currentStep.swap}
                            passIndexs={currentStep.passIndexs}
                        />
                break;

            case '/insertion-sort':
                return <InsertionSortVisuals 
                            arr={currentStep.arr} 
                            update={currentStep.update} 
                            toBeSwap={currentStep.toBeSwap}
                            keyElm={currentStep.keyElm}
                            swap={currentStep.swap}
                            sorted={currentStep.sorted}
                        />
                break;

            case '/selection-sort':
                return  <SelectionSortVisuals 
                            arr={currentStep.arr} 
                            minIndx={currentStep.minIndx}
                            swap={currentStep.swap}
                            passIndexs={currentStep.passIndexs} 
                            compare={currentStep.compare}
                        />
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {
        dispatch(GeneratingStepsAction(array.data, algorithm.algoName)) // dispatch for Generating Steps 
    }, [])

    useEffect(() => {    // Left-right navigation controller
        if(generatedSteps.success){
            let stepsLength = generatedSteps.steps.length;
            setStepLength(stepsLength);
            if(currentIndex > -1 && currentIndex < stepsLength){
                setCurrentStep(generatedSteps.steps[currentIndex])
            }
        }
    }, [currentIndex, generatedSteps.success])



    return(
        <div className='outPut-tab'>
            <div className='visual-section'>
                {
                    currentStep ? filterSort() : null
                }
            </div>
            <div className='visual-control-div'>
                <div className='status-showing-div'>
                    <label>{currentStep ? currentStep.text : null}</label>
                </div>
                <div className='status-control-div'>
                    <div 
                        className={currentIndex <= 0 ? `disabled-arrow` : `arrow`}
                        onClick={currentIndex <= 0 ? null : () => setCurrentIndex(prev => prev - 1)}
                    >
                        <BsChevronLeft/>
                    </div>

                    <div className='step-count'><h3> {currentIndex}/ </h3> {stepLength} </div>

                    <div 
                        className={currentIndex >= stepLength ? `disabled-arrow` : `arrow`} 
                        onClick={currentIndex >= stepLength ? null : () => setCurrentIndex(prev => prev + 1)}
                    >
                            <BsChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutputTab;