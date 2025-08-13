function greet<T extends boolean>(value: T){
    if(value){
        console.log("xin chao");
    }else{
        console.log("tam biet");
    }
}
let bool: boolean=true;
greet(bool);