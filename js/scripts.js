function triangle(){
var a = parseInt(prompt("Enter side a"));
var b = parseInt(prompt("Enter side b"));
var c = parseInt(prompt("Enter side c"));
if ((a===b) && (b===c)){
alert ("Equilateral")
}
if ((a==b) || (b==c) || (a==c)) {
alert ("Isosceles")
}
if ((a!==b) && (b!==c) && (a!==c)){
alert ("Scalene")
}
else {
alert ("Not a Triangle")
}
}
