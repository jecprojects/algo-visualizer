import { generatingStepsConstants } from "./constants";

export const GeneratingStepsAction = (data, algoName) => {
    return dispatch => {

        dispatch({
            type: generatingStepsConstants.GENERATING_SORTING_STEPS_REQUEST,
            payload: { 
                message: 'Generating Steps..'
            }
        });

        switch(algoName){

            case 'Bubble Sort':

                let steps = [];

                function swap(arr, xp, yp){
                    var temp = arr[xp];
                    arr[xp] = arr[yp];
                    arr[yp] = temp;
                }
                
                // An optimized version of Bubble Sort
                function bubbleSort( arr, n){
                    let i, j;
                    for (i = 0; i < n-1; i++){
                        // pass.
                        steps.push(
                            {
                                arr: [...arr],
                                text: `Starting pass ${i}`,
                                compare: null,
                                swap: null
                            },
                            {
                                arr: [...arr],
                                text: `For each element moving through the list.`,
                                compare: null,
                                swap: null
                            }
                        );

                        for (j = 0; j < n-i-1; j++){
                            steps.push(
                                {
                                    arr: [...arr],
                                    text: `Compare elements`,
                                    compare: [j, j+1],
                                    swap: null
                                }
                            );
                            if (arr[j] > arr[j+1]){
                                swap(arr,j,j+1);
                                steps.push(
                                    {
                                        arr: [...arr],
                                        text: `Swap`,
                                        compare: null,
                                        swap: [j, j+1]
                                    }
                                );
                            }
                        }

                        steps.push(
                            {
                                arr: [...arr],
                                text: `Done this pass. The last element processed is now
                                is its final position`,
                                compare: null,
                                swap: null
                            }
                        );
                    }
                }

                // Driver program to test above functions
                let arr = [...data.values];
                let n = data.size;

                steps.push(
                    {
                        arr: [...arr],
                        text: 'Starting bubble sort.',
                        compare: null,
                        swap: null
                    },
                    {
                        arr: [...arr],
                        text: `For each pass, we will move left ot right swapping adjacent
                        elements as needed. Each pass moves the next largest element into its final
                        position(these will be shown in green.)`,
                        compare: null,
                        swap: null
                    }
                );

                bubbleSort(arr, n);


                // After ends
                steps.push(
                    {
                        arr: [...arr],
                        text: `Done sorting`,
                        compare: null,
                        swap: null
                    }
                );

            dispatch({
                type: generatingStepsConstants.GENERATING_SORTING_STEPS_SUCCESS,
                payload: { 
                    message: 'Generating Steps success.',
                    steps: steps
                }
            });

        }
    }
}