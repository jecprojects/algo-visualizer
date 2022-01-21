import { algorithmConstants } from "./constants";

// Importing Algorithms
import bubblesort from "../../core/JS/bubblesort";
import insertionsort from "../../core/JS/insertionsort";

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
                        message: "Algorithm Found."
                    }
                });
                break;
            
            // default:
            //     dispatch({
            //         type: algorithmConstants.GET_SORTING_ALGORITHM_FAILURE,
            //         payload: {
            //             message: "Algorithm doesn't exist!"
            //         }
            //     });
        }

    }
}