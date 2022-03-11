import { algoRunningConstants } from './constants';


export const selectionSortAction = (algorithm, played) => {

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
            function swap(arr,xp, yp){
                var temp = arr[xp];
                arr[xp] = arr[yp];
                arr[yp] = temp;
            }
            
            function selectionSort(arr,  n)
            {
                var i, j, min_idx;
              
                // One by one move boundary of unsorted subarray
                for (i = 0; i < n-1; i++)
                {
                    // Find the minimum element in unsorted array
                    min_idx = i;
                    for (j = i + 1; j < n; j++)
                    if (arr[j] < arr[min_idx])
                        min_idx = j;
              
                    // Swap the found minimum element with the first element
                    swap(arr,min_idx, i);
                    let cArray = [...arr];
                    visualizeArray.push({
                        arr: cArray,
                        swap: [arr[min_idx], arr[i]],
                        j: min_idx,
                        i: i
                    })
                }
            }            
            
            let arr = [...algorithm.arr];
            let n = algorithm.n;

            
            selectionSort(arr, n);  // Program Execution Starts Here
            
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