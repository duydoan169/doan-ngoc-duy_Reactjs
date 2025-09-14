function reverseArr<T>(arr: T[]){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    console.log(arr);
}
reverseArr(["a", "b", "c"]);
reverseArr([1, 2, 3]);