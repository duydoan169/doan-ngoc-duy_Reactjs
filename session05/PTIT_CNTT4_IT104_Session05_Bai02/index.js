var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.email = email;
        this.age = age;
    }
    Student.prototype.printStudent = function () {
        console.log("Id: ".concat(this.id, ", Age: ").concat(this.age, ", Email: ").concat(this.email));
    };
    return Student;
}());
var student1 = new Student(1, 19, "duy@gmail.com");
var student2 = new Student(2, 7, "doan@gmail.com");
var student3 = new Student(3, 30, "ngoc@gmail.com");
var arr = [student1, student2, student3];
arr.forEach(function (element) {
    element.printStudent();
});
