function handleUnionType(input: number | string){
    if(typeof(input)==="string"){
        console.log(`${input.length} ky tu`);
    }else{
        if(input%2==0){
            console.log("day la so chan");
        }else{
            console.log("day la so le");
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
