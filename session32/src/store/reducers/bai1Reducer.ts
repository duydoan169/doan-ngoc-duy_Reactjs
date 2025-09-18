/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const initialState={
    user: {
        id: 1,
        name: "Nguyen Van Nam",
        gender: "nam",
        birthDate: "20/03/2023",
        address: "Thanh Xuan, Ha Noi"
    }
}
export const bai1Reducer=(state=initialState, action: any)=>{
    return state;
}