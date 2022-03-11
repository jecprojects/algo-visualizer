import { algoRunningConstants } from "../actions/constants";

const initState = {
    visualizeArray: null,
    running: false,
    complete: false,
};

export default (state = initState, action) => {
    switch(action.type){
        case algoRunningConstants.ALGO_BUBBLE_SORT_COMPLETE:
            state = {
                ...state,
                running: action.payload.running,
                complete: action.payload.complete,
                visualizeArray: action.payload.visualizeArray
            };
        break;
    }
    return state;
}