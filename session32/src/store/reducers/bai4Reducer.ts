const initialState={
    numbers: []
}
export const bai4Reducer=(state=initialState, action: {type: string})=>{
    if(action.type=="random"){
        return {numbers: [...state.numbers, Math.round(Math.random()*99)]};
    }
    return state;
}