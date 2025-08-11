//abstract method chi khai bao tham so va giu lieu tra ve chu khong khai bao logic luon nhu method thuong
//su dung khi muon cai dat mot giao dien bat buoc cho cac lop con ke thua
//lop con ke thua phai cai dat lai abstract method khong thi se gay loi

//vi du minh hoa
abstract class Job{
    type: string;
    constructor(type: string){
        this.type=type;
    }
    printType(){
        console.log(`Type: ${this.type}`);
    }
    abstract calculateSalary(): void; //abstract method
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