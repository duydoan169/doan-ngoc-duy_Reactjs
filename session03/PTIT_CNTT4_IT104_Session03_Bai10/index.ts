function checkLongest(str: string){
    let strArr=str.split(" ");
    let maxLength: number=strArr[0].length;
    let maxString: string=strArr[0];
    for (let string of strArr) {
        let arr: string[]=[];
        for (let char of string) {
            if(!arr.includes(char)){
                arr.push(char);
            }
        }
        if(arr.length>maxLength){
            maxLength=arr.length;
            maxString=string;
        }
    }
    console.log(maxString);
}
checkLongest("hello world apple banana orange pumpkin cucumber");