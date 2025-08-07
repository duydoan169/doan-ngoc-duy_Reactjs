type Person={
    name: string;
    age: number;
}
type Employee={
    id: string;
    department: string;
}
type Staffmember=Person&Employee;
function printStaffInfo(staff: Staffmember){
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.id} - Phong: ${staff.department}`);
}
printStaffInfo({name: "Nguyen Van A", age: 28, id: "EMP001", department: "ke toan"});