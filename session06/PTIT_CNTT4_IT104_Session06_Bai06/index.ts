class Student{
    private id: number;
    private name: string;

    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
}
let student1=new Student(1, "duy");
let student2=new Student(2, "doan");
let student3=new Student(3, "ngoc");
let student4=new Student(4, "hieu");
let student5=new Student(5, "hai anh");
let student6=new Student(6, "khang");
let allStudentArr: Student[]=[student1, student2, student3, student4, student5, student6];
class Classroom{
    students: Student[]=[];

    addStudent(student: Student){
        this.students.push(student);
    }
    showStudents(){
        for (let student of this.students) {
            console.log(`Id: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
    filterStudent(id: number){
        let found=this.students.filter(student => student.getId()==id);
        if(found.length==0){
            console.log("Id khong ton tai");
            return;
        }
        for (let student of found) {
            console.log(`Id: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
    addStudentInClass(){
        if(allStudentArr.length==0){
            console.log("Mang rong");
            return;
        }
        this.students.push(allStudentArr[0]);
        allStudentArr.splice(0, 1);
    }
}
let classroom1=new Classroom();
let classroom2=new Classroom();
classroom1.addStudentInClass();
classroom1.addStudentInClass();
classroom1.addStudentInClass();
classroom2.addStudentInClass();
classroom2.addStudentInClass();
classroom2.addStudentInClass();
console.log("classroom1: ");
classroom1.showStudents();
console.log("classroom2: ");
classroom2.showStudents();