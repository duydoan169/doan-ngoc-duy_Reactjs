class Student{
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string){
        this.id=id;
        this.email=email;
        this.age=age;
    }
    printStudent(){
        console.log(`Id: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let student1=new Student(1, 19, "duy@gmail.com");
let student2=new Student(2, 7, "doan@gmail.com");
let student3=new Student(3, 30, "ngoc@gmail.com");

let arr=[student1, student2, student3];
arr.forEach(element => {
    element.printStudent();
});