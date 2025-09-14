"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.isLogin = isLogin;
        this.password = password;
        this.role = role;
    }
    login() {
        this.isLogin = true;
    }
    logout() {
        if (this.isLogin == true) {
            console.log("dang xuat thanh cong");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status == "banned") {
            console.log("tai khoan da bi khoa");
            return;
        }
        this.isLogin = true;
    }
}
class adminAcc extends Account {
    banUser(id) {
        let found = arr.findIndex(user => user.id == id);
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        arr[found].status = "banned";
        arr[found].isLogin = false;
        console.log("khoa tai khoan thanh cong");
    }
}
let useracc1 = new userAcc(1, "duy", "password123", true, "user", "active");
let useracc2 = new userAcc(2, "yud", "password123", true, "user", "active");
let arr = [useracc1, useracc2];
let adminacc = new adminAcc(1, "john", "password1234", true, "admin");
adminacc.banUser(2);
useracc2.login();
