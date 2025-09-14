abstract class Person{
    name: string;

    constructor(name: string){
        this.name=name
    }
    displayInfo(){
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person{
    id: number;
    
    constructor(name: string, id: number){
        super(name);
        this.id=id;
    }
    displayInfo(): void {
        console.log(`Id: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person{
    subject: string;
    
    constructor(name: string, subject: string){
        super(name);
        this.subject=subject;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, Subject: ${this.subject}`);
    }
}
let student = new Student("doan ngoc duy", 1);
let teacher = new Teacher("john dcom", "art");
student.displayInfo();
teacher.displayInfo();