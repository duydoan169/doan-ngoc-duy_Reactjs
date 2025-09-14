abstract class Job{
    type: string;
    constructor(type: string){
        this.type=type;
    }
    printType(){
        console.log(`Type: ${this.type}`);
    }
    abstract calculateSalary(): void;
}
class ParttimeJob extends Job{
    workingHour: number;

    constructor(type: string, workingHour: number){
        super(type);
        this.workingHour=workingHour;
    }
    calculateSalary(): void {
        console.log(`Parttime salary: ${(30000*this.workingHour).toLocaleString()}`);
    }
}
class FulltimetimeJob extends Job{
    calculateSalary(): void {
        console.log(`Fulltime salary: ${(10000000).toLocaleString()}`);
    }
}
let parttimeJob=new ParttimeJob("parttime", 9);
let fulltimeJob=new FulltimetimeJob("fulltime");
parttimeJob.calculateSalary();
fulltimeJob.calculateSalary();