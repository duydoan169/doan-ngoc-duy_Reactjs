"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDup(string) {
    let arr = [];
    for (let char of string) {
        if (!arr.includes(char) || char == " ") {
            arr.push(char);
        }
    }
    console.log(arr.join(""));
}
removeDup("banana");
removeDup("hello world");
