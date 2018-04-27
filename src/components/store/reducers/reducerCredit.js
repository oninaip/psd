export  function reducerCredit(state={}, action){
    switch(action.type){
        case "CREDIT_DATA": return {
            money:action.payload.money,
            days:action.payload.days,
            rates:action.payload.rates,
            suma:action.payload.suma,
            newDate:action.payload.newDate,
            newDay:action.payload.newDay,
            year:action.payload.year,
            month:action.payload.month
        };
        default: return state;
    }
    
}