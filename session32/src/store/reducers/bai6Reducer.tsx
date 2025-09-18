export const bai6Reducer=(state={isDarkMode: false}, action: {type: string})=>{
    if(action.type=="changeMode"){
        return {isDarkMode: !state.isDarkMode}
    }
    return state;
}