export const bai5Reducer=(state = {isRikkeiSoft: true}, action: {type: string})=>{
    if(action.type=="change"){
        return {isRikkeiSoft: !state.isRikkeiSoft};
    }
    return state;
}