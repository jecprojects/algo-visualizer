import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GeneratingStepsAction } from "../../redux/actions/generatingSteps";
import ArrayVisuals from './arrayVisuals';
// CSS
import './styles/outputTab.css';
// ICONS
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const OutputTab = (props) => {

    const dispatch = useDispatch();

    const array = useSelector(state => state.arrayData);
    const algorithm = useSelector(state => state.algorithm);
    const generatedSteps = useSelector(state => state.generatedSteps);

    // console.log(generatedSteps)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(null);
    const [stepLength, setStepLength] = useState(null);

    useEffect(() => {
        dispatch(GeneratingStepsAction(array.data, algorithm.algoName)) // dispatch for Generating Steps 
    }, [])

    useEffect(() => {
        if(generatedSteps.success){
            let stepsLength = generatedSteps.steps.length;
            setStepLength(stepsLength);
            if(currentIndex > -1 && currentIndex < stepsLength){
                setCurrentStep(generatedSteps.steps[currentIndex])
            }
        }
    }, [currentIndex, generatedSteps.success])

    // console.log(`${currentIndex}: ${currentStep}`)

    return(
        <div className='outPut-tab'>
            <div className='visual-section'>
                {
                    currentStep ? 
                            <ArrayVisuals 
                                arr={currentStep.arr} 
                                compare={currentStep.compare} 
                                swap={currentStep.swap}
                                passIndexs={currentStep.passIndexs}
                            />
                            :
                            null
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