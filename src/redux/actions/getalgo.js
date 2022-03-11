import { algorithmConstants } from "./constants";

// Importing Algorithms
import bubblesort from "../../core/JS/bubblesort";
import insertionsort from "../../core/JS/insertionsort";
import selectionsort from "../../core/JS/selectionsort";

export const getAlgorithmAction = (algorithm) => {
    return dispatch => {

        console.log(algorithm)
        // Dispatching request
        dispatch({
            type: algorithmConstants.GET_SORTING_ALGORITHM_REQUEST
        });

        switch(algorithm){
            case "/bubble-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: {
                        title: bubblesort.title,
                        ext: bubblesort.ext,
                        code: bubblesort.code,
                        n:bubblesort.n,
                        arr: bubblesort.arr,
                        delay: bubblesort.delay,
                        message: "Algorithm Found."
                    }
                });
                break;

            case "/insertion-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: {
                        title: insertionsort.title,
                        ext: insertionsort.ext,
                        code: insertionsort.code,
                        n:insertionsort.n,
                        arr: insertionsort.arr,
                        delay: insertionsort.delay,
                        message: "Algorithm Found."
                    }
                });
                break;

            case "/selection-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: {
                        title: selectionsort.title,
                        ext: selectionsort.ext,
                        code: selectionsort.code,
                        n:selectionsort.n,
                        arr: selectionsort.arr,
                        delay: selectionsort.delay,
                        message: "Algorithm Found."
                    }
                });
                break;
            
        }

    }
}