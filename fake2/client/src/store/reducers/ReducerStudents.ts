/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState={
    users: [
        {
            id: 1,
            name: "duy"
        },
        {
            id: 2,
            name: "duy2"
        }
    ]
}
export const reducerStudents=(state = initialState, action: any)=>{
    switch (action.type) {
        case "add":
            
            return state;
        case "delete":
            
            return state;
        case "edit":
            
            return state;
        default:
            return state;
    }
}