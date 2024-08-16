/*Activity1*/
// task1
let n=prompt("Enter a no.:");
for(let i=1;i<=n;i++){
    console.log(i);
}
// task2

let m=prompt("Enter a no.:");
for(let i=1;i<=m;i++){
    console.log("5 *",i,"=",5*i);
}

/*Activity2 */
// task3
let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// task4
let y=prompt("enter a no,:");
while(y>0){
    console.log(y);
    y--;
}

/*Activity3 */
// task5
let x=prompt("enter a no.:");
do {
    console.log(x);
    x--;
} while (x>0);

// task6
let result=1;
let num=prompt("enter a no.:");
do {
    result=result*num;
    num--;
} while (num>0);
console.log(result);
/*Activity4*/
let a=prompt("enter a no.:")
for(let i=1;i<=a;i++){
    for(let j=1;j<=i;j++){
        console.log("*");
        
    }
    "\n";
}

// task8
let b=prompt("Enter a no.:");
for(let i=1;i<=b;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// task9
let c=prompt("Enter a no.:");
for(let i=1;i<=c;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
