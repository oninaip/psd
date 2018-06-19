export  function reducerLocation(state=[], action){
    switch(action.type){
        case "SEE_LOCATION": return action.payload;
        
        default: return state;
    }
    
}