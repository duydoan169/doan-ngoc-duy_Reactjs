var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return User;
}());
function updateUser(user, updates) {
    if (Object.keys(updates).includes("id")) {
        return "Id cannot be changed";
    }
    return __assign(__assign({}, user), updates);
}
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
var updates = {
    id: 2,
    name: "Alice Johnson",
};
console.log(updateUser(user, updates));
