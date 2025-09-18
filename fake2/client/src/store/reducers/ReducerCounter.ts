/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState={
    count: 0,
    status: true
}
export const reducerCounter=(state = initialState, action: any)=>{
    switch(action.type){
        case "increment":
            state.count+=1; 
            return {...state}
        case "decrement":
            state.count-=1; 
            return {...state}
        default:
            return state;
    }
}