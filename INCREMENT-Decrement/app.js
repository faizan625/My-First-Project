// var a = 1;
// var b = 2;
// var c = --b + ++b + b++ + b;
// //alert("The Value is = "+c)
// alert("\n And The Value Of B is ="+b);
var name = prompt("Enter Your Name ");
var a = +prompt("Enter The Marks of Maths number","The Value is ");
var b = +prompt("Enter The Marks of English Number","The Value is ");
var c = +prompt("Enter The Marks of Physics Number","The Value is ");
var d = +prompt("Enter The Marks of Urdu Number","The Value is ");
var e = +prompt("Enter The Marks of Islamiat ","The Value is ");
var f = +prompt("Enter the Marks of Chemistry","The Value is ");
//var b = +prompt("Enter The Value","The Value is ");
//var c = (a);
var total = a+b+c+d+e+f;
var num = total*100/600;

document.write(" Your Total Number is "+total);
if(num < 40)
{
    document.write("<br/>" + name +" Your Grade Is E "+"and your Percentage is = "+num);
}
else if(num < 50)
{
    document.write("<br/>" + name +" Your Grade Is D "+"and your Percentage is = "+num);
}
else if(num < 60)
{
    document.write("<br/>" + name +" Your Grade Is C "+"and your Percentage is = "+num);
}
else if(num < 70)
{
    document.write("<br/>" + name + " Your Grade Is B "+"and your Percentage is = "+num);
}
else if(num < 80)
{
    document.write("<br/>" + name + " Your Grade Is A "+"and your Percentage is = "+num);
}
else if(num < 100)
{
    document.write("<br/>" + name + " Your Grade Is A+ "+"and your Percentage is = "+num);
}
else {
    alert("Please input a Valid percentage");
}