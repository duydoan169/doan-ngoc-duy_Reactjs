var arr = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var result = arr.reduce(function (sum, current) { return sum + current; }, 0) / arr.length;
console.log("diem trung binh", result.toFixed(2));
