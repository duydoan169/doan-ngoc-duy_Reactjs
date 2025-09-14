function getDataFromAPI1(callback){
    setTimeout(()=>{
        console.log("1");
        callback();
    }, 1000);
}
function getDataFromAPI2(callback){
    setTimeout(()=>{
        console.log("2");
        callback();
    }, 1000);
}
function getDataFromAPI3(){
    setTimeout(()=>{
        console.log("3");
    }, 1000);
}
function runAll(){
    getDataFromAPI1(()=>{
        getDataFromAPI2(()=>{
            getDataFromAPI3();
        })
    })
}
runAll()