import { arrayValuesConstants } from "../actions/constants";

const initState = { data: null, success: false };

export default (state = initState, action) => {

    switch(action.type){
        
        case arrayValuesConstants.GET_ARRAY_VALUES_SUCCESS:
            state = {
                ...state,
                arrayData: action.payload.arrayData,
                success: action.payload.success
            };
            break;
    }

    return state;

}