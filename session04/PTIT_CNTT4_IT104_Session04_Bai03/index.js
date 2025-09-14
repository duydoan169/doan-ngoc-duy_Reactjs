function introduce(student) {
    console.log("Ten toi la ".concat(student.name, ", toi ").concat(student.age, " tuoi va email cua toi la ").concat(student.email, "."));
}
introduce({ name: "duy", age: 19, email: "email@gmail.com" });
