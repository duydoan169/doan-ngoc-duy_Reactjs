export const bai3Reducer=(state={count: 0}, action: {type: string})=>{
    if(action.type=="increase"){
        return {count: state.count + 1};
    }else if(action.type=="decrease"){
        return {count: state.count-1};
    }
    return state;
}