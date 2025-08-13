"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays["monday"] = "monday";
    weekDays["tuesday"] = "tuesday";
    weekDays["wednesday"] = "wednesday";
    weekDays["thursday"] = "thursday";
    weekDays["friday"] = "friday";
    weekDays["saturday"] = "saturday";
    weekDays["sunday"] = "sunday";
})(weekDays || (weekDays = {}));
for (const day of Object.values(weekDays)) {
    console.log(day);
}
