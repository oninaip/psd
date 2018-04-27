export function addData(newName,newSurname,newAbout){
    var date= new Date();
    var year = date.toLocaleDateString('ko-KR');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var time =  hour + ":" + minutes + ":" + second;

    return{
        type:"ADD_DATA",
        payload: {
            name:newName,
            surname:newSurname,
            about:newAbout,
            date: year,
            time:time
            
        }
    }
}
export function removeData(index){
    return{
        type:"REMOVE_DATA",
        payload:index
        
    }
}
export function updateData(id,newName,newSurname,newAbout){
    var date= new Date();
    var year = date.toLocaleDateString('ko-KR');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var time =  hour + ":" + minutes + ":" + second;

    return{
        type:"UPDATE_DATA",
        payload: {
            id:id,
            name:newName,
            surname:newSurname,
            about:newAbout,
            date: year,
            time:time
            
        }
    }
}

export function newState(newState){
    return{
        type:"SET_STATE",
        payload: newState
    }
}

export function newCredit(money, days,rates,suma,newDate,newDay,year,month ){
    return {
        type: "CREDIT_DATA",
        payload: {
            money:money,
            days:days,
            rates: rates,
            suma:suma,
            newDate:newDate,
            newDay:newDay,
            year:year,
            month:month
            
        }
    } 
}
export function addHistory(credit,name,code,email,date){
    return{
        type:"CREDIT_HISTORY",
        payload: {
            money:credit.money,
            days:credit.days,
            rates: credit.rates,
            suma:credit.suma,
            newDate:credit.newDate,
            name:[name,credit.name],
            code:[code, credit.code],
            email: [email, credit.email],
            date:[date, credit.date]
        } 
    }
}
export function addUser(name,code,email){
    return{
        type:"ADD_USER",
        payload: {
            name:name,
            code:code,
            email: email
        }
    }
}
export function showSong(song){
    return{
        type:"SHOW_SONG",
        payload: {
            name:song.name,
            words:song.words,
            chords:song.chords
        }
    }
}
