function printStaffInfo(staff) {
    console.log("Nhan vien: ".concat(staff.name, " (").concat(staff.age, " tuoi), Ma nhan vien: ").concat(staff.id, " - Phong: ").concat(staff.department));
}
printStaffInfo({ name: "Nguyen Van A", age: 28, id: "EMP001", department: "ke toan" });
