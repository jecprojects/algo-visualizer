import { algoRunningConstants } from './constants';


const delay = (ms) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < ms);
}


export const bubbleSortAction = (algorithm) => {
    return dispatch => {
        const visualizeArray = [];
        function swap(arr, xp, yp){
            var temp = arr[xp];
            arr[xp] = arr[yp];
            arr[yp] = temp;
        }
        
        function bubbleSort(arr, n){
            let i, j;
            for (i = 0; i < n-1; i++){
                for (j = 0; j < n-i-1; j++){
                    if (arr[j] > arr[j+1]){
                        swap(arr, j, j+1);
                        visualizeArray.push({
                            arr, 
                            swap:[arr[j], arr[j+1]],
                            i: i,
                            j: j
                        })
                    }
                }
            }
        }
        
        let arr = algorithm.arr;
        let n = algorithm.n;
        
        dispatch({
            type: algoRunningConstants.ALGO_BUBBLE_SORT_RUNNING,
            payload:{
                running: true
            }
        })
        
        bubbleSort(arr, n);  // Program Execution Starts Here
        
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