import { algoRunningConstants } from './constants';


export const insertionSortAction = (algorithm, played) => {

    if(played){    // If Played
        // This is triggered when already played the algorithm and to back
        return dispatch => {
            const visualizeArray = [];

            dispatch({
                type: algoRunningConstants.ALGO_BUBBLE_SORT_COMPLETE,
                payload:{
                    running: false,
                    complete: false,
                    visualizeArray: visualizeArray
                }
            })
        }

    }else{     // User is on theory part and wants to play
        return dispatch => {
            const visualizeArray = [];
            
            function insertionSort(arr, n) 
            { 
                let i, key, j; 
                for (i = 1; i < n; i++)
                { 
                    key = arr[i]; 
                    j = i - 1; 
                    let cArray1 = [...arr];
                    visualizeArray.push({
                        arr: cArray1,
                        ele: [arr[key], arr[j]],
                        j: j,
                        i: i,
                        key: key
                    })

                    /* Move elements of arr[0..i-1], that are 
                    greater than key, to one position ahead 
                    of their current position */
                    while (j >= 0 && arr[j] > key)
                    {

                        arr[j + 1] = arr[j]; 
                        j = j - 1; 

                        let cArray2 = [...arr];
                        visualizeArray.push({
                            arr: cArray2,
                            ele: [arr[key], arr[j]],
                            j: j,
                            i: i,
                            key: key
                        })
                    } 
                    arr[j + 1] = key; 
                    let cArray3 = [...arr];
                    visualizeArray.push({
                        arr: cArray3,
                        ele: [arr[key], arr[j]],
                        j: j,
                        i: i,
                        key: key
                    })
                } 
            } 
            
            let arr = [...algorithm.arr];
            let n = algorithm.n;

            
            insertionSort(arr, n);  // Program Execution Starts Here
            
            dispatch({
                type: algoRunningConstants.ALGO_BUBBLE_SORT_COMPLETE,
                payload:{
                    running: false,
                    complete: true,
                    visualizeArray: visualizeArray
                }
            })

        }
    }
}