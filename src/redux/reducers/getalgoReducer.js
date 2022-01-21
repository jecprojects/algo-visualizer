import { algorithmConstants } from "../actions/constants";

const initState = {
    title: null,
    ext: null,
    code: null,
    loading: false,
    message: null
};

export default (state = initState, action) => {
    switch(action.type){
        case algorithmConstants.GET_SORTING_ALGORITHM_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        
        case algorithmConstants.GET_SORTING_ALGORITHM_SUCCESS:
            state = {
                ...state,
                loading: false,
                title: action.payload.title,
                ext: action.payload.ext,
                code: action.payload.code,
                message: action.payload.message
            };
            break;
    }

    return state;
}