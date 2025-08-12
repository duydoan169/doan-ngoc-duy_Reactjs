var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.isLogin = isLogin;
        this.password = password;
        this.role = role;
    }
    Account.prototype.login = function () {
        this.isLogin = true;
    };
    Account.prototype.logout = function () {
        if (this.isLogin == true) {
            console.log("dang xuat thanh cong");
            this.isLogin = false;
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, password, isLogin, role, status) {
        var _this = _super.call(this, id, userName, password, isLogin, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function () {
        if (this.status == "banned") {
            console.log("tai khoan da bi khoa");
            return;
        }
        this.isLogin = true;
    };
    return userAcc;
}(Account));
var useracc = new userAcc(1, "duy", "password123", true, "user", "active");
useracc.logout();
