var a = parseInt(prompt("Enter side a"));
var b = parseInt(prompt("Enter side b"));
var c = parseInt(prompt("Enter side c"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("all sides must be numerical");
}
if (a >= (b + c) || b >= (c + a) || c >= (a + b)) {
alert("Not a Triangle")
}
if (a===b && b===c && a===c){
alert ("Equilateral")
}
else if (a==b || b==c || a==c) {
alert ("Isosceles")
}
else if (a!==b && b!==c && a!==c){
alert ("Scalene")
}
else {
alert ("Not a Triangle")
}
