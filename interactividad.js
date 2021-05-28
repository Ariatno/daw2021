function limpiarform (){
document.getElementById('cmapul').reset();
}
var I = function (n1){
var m=parseFloat(document.getElementById("nq1").value);
var r= m/2.54
return r
}
var ma = function (n1){
var mi=parseFloat(document.getElementById("nu1").value);
var r2 = mi*1.094
return r2

}
var menor = function (n1,n2,n3){
	var n1= parseFloat(document.getElementById("n1").value);
	var n2= parseFloat(document.getElementById("n2").value);
	var n3= parseFloat(document.getElementById("n3").value);

if (n1<n2&&n1<n3)
{
	alert("El numero menor es:" +"*"+n1+ "*");
}
else
{
	if (n2<n1&&n2<n3)
	{
	alert("El numero menor es:" +"*"+n2+ "*");

}

else
{
	alert("El numero menor es:" +"*"+n3+ "*");
}
}
}