"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
let student1 = new Student(1, "duy");
let student2 = new Student(2, "doan");
let student3 = new Student(3, "ngoc");
let student4 = new Student(4, "hieu");
let student5 = new Student(5, "hai anh");
let student6 = new Student(6, "khang");
let allStudentArr = [student1, student2, student3, student4, student5, student6];
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        for (let student of this.students) {
            console.log(`Id: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
    filterStudent(id) {
        let found = this.students.filter(student => student.getId() == id);
        if (found.length == 0) {
            console.log("Id khong ton tai");
            return;
        }
        for (let student of found) {
            console.log(`Id: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
    addStudentInClass() {
        if (allStudentArr.length == 0) {
            console.log("Mang rong");
            return;
        }
        this.students.push(allStudentArr[0]);
        allStudentArr.splice(0, 1);
    }
    removeStudent(id) {
        let found = this.students.findIndex(student => student.getId() == id);
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        allStudentArr.push(this.students[found]);
        this.students.splice(found, 1);
    }
    editStudent(id, name) {
        let found = this.students.findIndex(student => student.getId() == id);
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        this.students[found].setName(name);
    }
}
let classroom1 = new Classroom();
let classroom2 = new Classroom();
classroom1.addStudentInClass();
classroom1.addStudentInClass();
classroom1.addStudentInClass();
classroom2.addStudentInClass();
classroom2.addStudentInClass();
classroom2.addStudentInClass();
classroom1.removeStudent(2);
classroom2.editStudent(6, "the anh");
console.log("classroom1: ");
classroom1.showStudents();
console.log("classroom2: ");
classroom2.showStudents();
