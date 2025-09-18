type State={
    currentUser:{
        email: string,
        password: string
    },
    inputs:{
        email: string,
        password: string
    },
    isLogin: boolean
}
const initialState: State={
    currentUser:{
        email: "",
        password: ""
    },
    inputs:{
        email: "",
        password: ""
    },
    isLogin: false
}
export const bai78Reducer=(state: State=initialState, action: {type: string, payload: string})=>{
    if(action.type=="login"){
        alert("Dang nhap thanh cong");
        console.log(state.currentUser);
        return {...state};        
    }else if(action.type=="signup"){
        if(state.inputs.email=="" || state.inputs.password==""){
            alert("khong duoc de trong du lieu");
            return state;
        }
        alert("Dang ky thanh cong");
        return {...state,currentUser: {...state.inputs}, isLogin: true}
    }else if(action.type=="email"){
        return {...state, inputs: {...state.inputs, email: action.payload}}
    }else if(action.type=="password"){
        return {...state, inputs: {...state.inputs, password: action.payload}}
    }
    return state;
}