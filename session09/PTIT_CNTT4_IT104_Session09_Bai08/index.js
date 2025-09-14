function createObject(keys, values) {
    var obj = {};
    for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}
var keys = ['name', 'age', 'email'];
var values = ['Alice', 25, 'alice@example.com'];
console.log(createObject(keys, values));
