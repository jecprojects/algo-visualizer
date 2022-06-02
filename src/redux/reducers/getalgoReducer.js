import { algorithmConstants } from "../actions/constants";

const initState = { algoName: null, message: null };

export default (state = initState, action) => {

    switch(action.type){
        case algorithmConstants.GET_SORTING_ALGORITHM_REQUEST:
            state = {
                ...state,
                message: action.payload.message
            };
            break;
        
        case algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS:
            state = {
                ...state,
                algoName: action.payload.algorithm,
                message: action.payload.message
            };
            break;
    }

    return state;

}