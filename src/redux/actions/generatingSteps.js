import { generatingStepsConstants } from "./constants";
// Sorting Functions
import BubbleSort from "./sortingFunctions/bubblesort";
import InsertionSort from "./sortingFunctions/insertionsort";
import SelectionSort from "./sortingFunctions/selectionsort";

export const GeneratingStepsAction = (data, algoName) => {
    return dispatch => {

        dispatch({
            type: generatingStepsConstants.GENERATING_SORTING_STEPS_REQUEST,
            payload: { 
                message: 'Generating Steps..'
            }
        });

        switch(algoName){

            case 'Bubble Sort': { 
                // When action run for bubble Sort
                let steps = [];
                BubbleSort(data, steps);

                dispatch({
                    type: generatingStepsConstants.GENERATING_SORTING_STEPS_SUCCESS,
                    payload: { 
                        message: 'Generating Steps success.',
                        steps: steps
                    }
                });
            }
            return;

            // ////////////////////// selection sort ///////////////////////////////////////
            case 'Selection Sort' : {

                let steps = [];
                SelectionSort(data, steps);

                dispatch({
                    type: generatingStepsConstants.GENERATING_SORTING_STEPS_SUCCESS,
                    payload: { 
                        message: 'Generating Steps success.',
                        steps: steps
                    }
                });
            }
            return;

            case 'Insertion Sort' : {

                let steps = [];
                InsertionSort(data, steps);

                dispatch({
                    type: generatingStepsConstants.GENERATING_SORTING_STEPS_SUCCESS,
                    payload: { 
                        message: 'Generating Steps success.',
                        steps: steps
                    }
                });
            }
            return;
        }
    }
}