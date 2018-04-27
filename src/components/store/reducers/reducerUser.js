export  function reducerUser(state={}, action){
    switch(action.type){
        case "ADD_USER": return  {
            name:action.payload.name,
            code:action.payload.code,
            email:action.payload.email
        };
        default: return state;
    }
    
}