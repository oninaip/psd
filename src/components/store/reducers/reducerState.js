export  function reducerState(state=[], action){
    switch(action.type){
        case "SET_STATE": return action.payload;
        default: return state;
    }
    
}