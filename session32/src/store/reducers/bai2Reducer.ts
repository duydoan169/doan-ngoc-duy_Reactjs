/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const initialState={
    user:[
        {
            id: 1,
            name: "Nguyen Van Nam",
            gender: "nam",
            birthDate: "20/03/2023",
            address: "Thanh Xuan, Ha Noi"
        },
        {
            id: 2,
            name: "Do Tran Dong Nam",
            gender: "nam",
            birthDate: "10/07/2016",
            address: "Cau Giay, Ha Noi"
        }
    ]
}
export const bai2Reducer=(state=initialState, action: any)=>{
    return state;
}