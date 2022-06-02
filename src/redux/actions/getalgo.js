import { algorithmConstants } from "./constants";

export const getAlgorithmAction = (algorithm) => {
    return dispatch => {

        console.log(algorithm)
        // Dispatching request
        dispatch({
            type: algorithmConstants.GET_SORTING_ALGORITHM_REQUEST,
            payload: { message: 'Getting Algorithm...' }
        });

        switch(algorithm){
            case "/bubble-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: { algorithm: 'Bubble Sort',  message: null  }
                });
                break;

            case "/insertion-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: { algorithm: 'Insertion Sort',  message: null }
                });
                break;

            case "/selection-sort":
                dispatch({
                    type: algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS,
                    payload: { algorithm: 'Selection Sort',  message: null }
                });
                break;
            
        }

    }
}