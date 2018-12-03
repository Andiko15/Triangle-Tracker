function triangleType(){


var A= parseInt(document.getElementById("a").value);
var B = parseInt(document.getElementById("b").value);
var C = parseInt(document.getElementById("c").value);
/*if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('answer').value="all sides must be numerical";
}*/

if (A===B && B===C && A===C){
 document.getElementById('answer').value ="Equilateral";
}
else if (A==B || B==C || A==C) {
document.getElementById('answer').value ="Isosceles";
}
else if (A!==B && B!==C && A!==C){
  if (A >= (B + C) || B >= (C + A) || C >= (A + B)) {
  document.getElementById('answer').value="Not a Triangle";
  }
else {
document.getElementById('answer').value ="Scalene";
}
}
}
function start() {
  document.getElementById("aValue").value="";
  document.getElementById("bValue").value="";
  document.getElementById("cValue").value="";
}
