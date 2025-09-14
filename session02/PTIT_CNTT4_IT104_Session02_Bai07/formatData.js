export function formatDate(time){
    let date=time.getDate();
    if(date<10){
        date="0"+date;
    }
    let month=time.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    let year=time.getFullYear();
    console.log(`${date}/${month}/${year}`);
}