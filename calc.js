function insert(num) 
{
document.getElementById("res").innerHTML =document.getElementById("res").innerHTML + num;
}
function equal()
{
var exp = document.getElementById("res").innerHTML;
if(exp)
{
  document.getElementById("res").innerHTML = eval(exp);
}
}
function del(){
  document.getElementById("res").innerHTML="";
}

