//Way-1

var myCar_1 = new Object();
myCar_1.maxSpeed=180;
myCar_1.driver="AB";

console.log(myCar_1.maxSpeed);
console.log(myCar_1.driver);

myCar_1.drive = function(){console.log("Now Driving");};
myCar_1.drive();


//Way-2

var myCar_2 = {
    maxSpeed: 200,
    driver: "DK",
    drive: function(speed, time) {
        console.log(speed*time);
    }
};

console.log(myCar_2.maxSpeed);
console.log(myCar_2.driver);
myCar_2.drive(180, 3);