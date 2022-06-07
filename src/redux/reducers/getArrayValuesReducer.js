import { arrayValuesConstants } from "../actions/constants";

const initState = { data: null };

export default (state = initState, action) => {

    switch(action.type){
        
        case arrayValuesConstants.GET_ARRAY_VALUES_SUCCESS:
            state = {
                ...state,
                data: action.payload.arrayData
            };
            break;
    }

    return state;

}