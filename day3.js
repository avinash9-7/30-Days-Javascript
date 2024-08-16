/*Activity1 */
// task1
let n=parseInt(prompt("enter a no.:"));
if(n>0){
    console.log("Positive");
}
else if(n<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// task2
let age=parseInt(prompt("enter your age:"));
if(age>=18){
    console.log("Eligible for Voting");
}
else{
    console.log("not eligible");
}

// task3
let a=parseInt(prompt("enter a first no.:"));
let b=parseInt(prompt("enter a second no.:"));
let c=parseInt(prompt("enter a third no.:"));
if(a>b){
    if(a>c){
        console.log("a is largest");
    }
    else{
        console.log("c is largest");
    }
}
else if(b>a){
    if(b>c){
        console.log("b is largest");
    }
    else{
        console.log("c is largest");
    }
}
// task5
let m=parseInt(prompt("enter a no.:"));
switch(m){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}
// task6
let year=parseInt(prompt("enter a year:"));
if(year%4==0 && year%400==0){
    console.log(year," is a leap year");
}
else{
    console.log(year," is not a leap year")
}

// task7
let number=prompt("enter a no.:");

let result=number%2==0? "even" : "odd" ;
console.log(result)