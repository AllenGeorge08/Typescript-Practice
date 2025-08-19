var user = {
    name: "Daniel",
    age: 26,
};
//user.location; //throws an error here but in case of javascript it returns undefined
var anmouncement = "Hello World!";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", 45);
