export  function reducerHistory(state=[], action){
    switch(action.type){
        case "CREDIT_HISTORY": return [...state, {
            money:action.payload.money,
            days:action.payload.days,
            rates:action.payload.rates,
            suma:action.payload.suma,
            newDate:action.payload.newDate,
            name:action.payload.name,
            code:action.payload.code,
            email:action.payload.email,
            date:action.payload.date
        }];
        default: return state;
    }
    
}