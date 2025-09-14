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
let useracc= new userAcc(1, "duy", "password123", true, "user", "active");
useracc.logout();