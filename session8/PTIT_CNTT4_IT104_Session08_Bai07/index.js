"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    let result = [];
    for (const ar of arr) {
        if (Array.isArray(ar)) {
            result.push(...ar);
        }
        else {
            result.push(ar);
        }
    }
    return result;
}
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
