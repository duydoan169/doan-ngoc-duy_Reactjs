function withDefault<T>(input?: T){
    if(input==undefined){
        return "default"
    }else{
        return input;
    }
}
console.log(withDefault()); 