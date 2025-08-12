class Account{
    id: number;
    userName: string;
    private password: string;
    isLogin: boolean;
    role: string;

    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string){
        this.id=id;
        this.userName=userName;
        this.isLogin=isLogin;
        this.password=password;
        this.role=role;
    }

    login(){
        this.isLogin=true;
    }
    logout(){
        if(this.isLogin==true){
            console.log("dang xuat thanh cong");
            this.isLogin=false;
        }
    }
}
class userAcc extends Account{
    status: string;

    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string, status: string){
        super(id, userName, password, isLogin, role);
        this.status=status;
    }
    login(): void {
        if(this.status=="banned"){
            console.log("tai khoan da bi khoa");
            return;
        }
        this.isLogin=true;
    }
}
class adminAcc extends Account{
    banUser(id: number){
        let found=arr.findIndex(user => user.id==id);
        if(found==-1){
            console.log("Id khong ton tai");
            return;
        }
        arr[found].status="banned";
        arr[found].isLogin=false;
        console.log("khoa tai khoan thanh cong");
    }
}
let useracc1= new userAcc(1, "duy", "password123", true, "user", "active");
let useracc2= new userAcc(2, "yud", "password123", true, "user", "active");
let arr: userAcc[]=[useracc1, useracc2];
let adminacc= new adminAcc(1, "john", "password1234", true, "admin");
adminacc.banUser(2);
useracc2.login();