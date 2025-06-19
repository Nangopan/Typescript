// based on parameters
function add(num1, num2) {
    return num1 + num2;
}
function signUp(name, age, place) {
    if (place === void 0) { place = "India"; }
}
console.log(add(1, 2));
// based on return values
function sum(num) {
    return num + 2;
}
// arrow functions
var sum = function (num) {
    return num + 2;
};
// Handle error
function handleError(errormsg) {
    throw new Error("Invalid entry");
}
// Objects
function signup(_a) {
    var string = _a.name, boolean = _a.isUser;
    return { name: "nangopan", isUser: true };
}
function info(val) {
    return "hiii";
}
info({ name: "Bharath", age: 20 });
var user1 = {
    name: "Nangopan",
    age: 25,
    isUser: true,
};
// user1.name="Madhan"
user1.age = 55;
var user2 = {
    name: "kumar",
    age: 50
};
