var your_name , your_age ;
var p1 ;
var  p2 ;
var sum;

your_name = prompt ("what is your name ? ");
p1 =prompt("Input first Number");

p2 =prompt("Input second Number");
var p3 =prompt("Input  character 1 to type it ten time");
var p4 =prompt("Input  character 2 to type it ten time");
var p5 =prompt("Input  character 3  to type it ten time");
//  if (   your_name == "mohamad" ){
    
confirm("HELLO "+ "," +your_name );
while( p1 == 1 &&  p2 == 1){
    p1 =prompt("Input first Number, should not equal 1");

    p2 =prompt("Input second Number, should not equal 1");
    
}

for (var i=0;i<=10;i++){
    document.write(i);
    document.write(p3);
    document.write("  ");
    document.write(i);
    document.write(p4);
    document.write("  ");
    document.write(i);
    document.write(p5);
    document.write("  ");
}

var num=function multi(){

    // if (p1 ===Number &&  p2 === Number ){continue;}
    
    sum=p1*p2;
    return sum;
}
num();

// }

document.write('<h3>' +"your_name is :" + your_name + '</h3>');
document.write("sum is =" + "  " + sum);
// your_age = prompt("what is your drink ?");
// while (your_age !== "coffee" || your_age !== "Tea"){
//     your_age =prompt("Choice coffee or Tea");
//     return your_age;
// }
// // 
// if (your_age >=90 || your_age <=100){
//     document.write('<h4>' + "your grade is :" + your_age + '</h4>');
// } else if (your_age >=80 || your_age <=89){
//     document.write('<h4>' + "your grade is :" + your_age + '</h4>');
// } else if (your_age >=70 || your_age <=79){
//     document.write('<h4>' + "your grade is :" + your_age + '</h4>');
// } else {
//     document.write('<h4>' + "your grade is :" + " F A I L" + '</h4>');
// } 



alert("T H A N K Y O U" + " " + your_name);