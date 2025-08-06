var firstName = "john";
var lastName = "doe";
firstName = firstName[0].toUpperCase() + firstName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);
var fullname = firstName + " " + lastName;
console.log("fullname:", fullname);
