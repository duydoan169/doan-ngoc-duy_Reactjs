type Student={
    name: string;
    age: number;
    email: string;
}
function introduce(student: Student): void{
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}.`)
}
introduce({name:"duy", age:19, email:"email@gmail.com"});