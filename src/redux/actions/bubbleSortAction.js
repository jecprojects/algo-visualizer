import { algoRunningConstants } from './constants';


export const bubbleSortAction = (algorithm, played) => {

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
            function swap(arr, xp, yp){
                let temp = arr[xp];
                arr[xp] = arr[yp];
                arr[yp] = temp;
            }
            
            function bubbleSort(arr, n){
                let i, j;
                for (i = 0; i < n-1; i++){
                    for (j = 0; j < n-i-1; j++){

                        let cArray1 = [...arr];
                        visualizeArray.push({
                            arr: cArray1, 
                            ele:[arr[j], arr[j+1]],
                            i: i,
                            j: j,
                        })

                        if (arr[j] > arr[j+1]){

                            let cArray2 = [...arr];
                            visualizeArray.push({
                                arr: cArray2, 
                                ele:[arr[j], arr[j+1]],
                                i: i,
                                j: j,
                            })

                            swap(arr, j, j+1);

                            let cArray3 = [...arr];
                            visualizeArray.push({
                                arr: cArray3, 
                                swap:[arr[j], arr[j+1]],
                                i: i,
                                j: j,
                            })
                        }
                    }
                }
            }
            
            let arr = [...algorithm.arr];
            let n = algorithm.n;

            
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
}