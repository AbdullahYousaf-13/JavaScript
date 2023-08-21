var myDate = new Date();
var myPastDate = new Date(2022, 7, 21, 10, 30, 15);
var myFutureDate = new Date(2026, 1, 21, 20, 40, 30);
console.log(myDate);
console.log(myPastDate);
console.log(myFutureDate);


var birthday_1 = new Date(2002, 1, 13, 11, 15, 25);
var birthday_2 = new Date(2002, 1, 13, 11, 15, 25);

//Methods

//gets the month of the date (0-11)
console.log(birthday_1.getMonth());

//gets the full year (YYYY)
console.log(birthday_1.getFullYear());

//gets the date of the month (1-31)
console.log(birthday_1.getDate());

//gets the day of the week (0-6)
console.log(birthday_1.getDay());

//gets the hour of the date (0-23)
console.log(birthday_1.getHours());

//gets the milliseconds since 13th of Feb (the most used)
console.log(birthday_1.getTime());

//Comparing Birthday Objects
if (birthday_1===birthday_2){
    console.log("You were born at the same time")
}
else{
    console.log("You weren't born at the same time")
}

//Comparing Birthday Time
if (birthday_1.getTime()===birthday_2.getTime()){
    console.log("You were born at the same time")
}
else{
    console.log("You weren't born at the same time")
}