var your_name , your_age;

your_name = prompt ("what is your name ? ");
 if (   your_name == "mohamad" ){
    
    confirm(your_name + ", " +"can you write again your age,PLZ?");
}

document.write('<h3>' +"your_name is :" + your_name + '</h3>');
your_age = prompt("whats your grade ?");
if (your_age >=90 || your_age <=100){
    document.write('<h4>' + "your grade is :" + your_age + '</h4>');
} else if (your_age >=80 || your_age <=89){
    document.write('<h4>' + "your grade is :" + your_age + '</h4>');
} else if (your_age >=70 || your_age <=79){
    document.write('<h4>' + "your grade is :" + your_age + '</h4>');
} else {
    document.write('<h4>' + "your grade is :" + " F A I L" + '</h4>');
} 



alert("T H A N K Y O U" + " " + your_name);