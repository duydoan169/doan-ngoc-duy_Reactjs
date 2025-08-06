function removeDup(string: string){
    let arr: string[]=[];
    for (let char of string) {
        if(!arr.includes(char) || char==" "){
            arr.push(char);
        }
    }
    console.log(arr.join(""));
}
removeDup("banana");
removeDup("hello world");