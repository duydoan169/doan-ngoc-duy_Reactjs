enum weekDays{
    monday="monday",
    tuesday="tuesday",
    wednesday="wednesday",
    thursday="thursday",
    friday="friday",
    saturday="saturday",
    sunday="sunday"
}
for (const day of Object.values(weekDays)) {
    console.log(day);
}