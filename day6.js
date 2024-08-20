/*Activity1*/
// task1
let arr=[1,2,3,4,5];
console.log(arr);
// task2
a=arr[1];
b=arr[(arr.length)-1];
/*Array Methods */
// task3
arr.push(6);
console.log(arr);
// task4
arr.pop();
console.log(arr);
// task5
arr.shift();
console.log(arr);
// task6
arr.unshift(1);
console.log(arr);
/*Activity3*/
// task7
let newArr=arr.map((val)=>{
    return (val*2);
})
console.log(newArr)
// task8
let newAr=arr.filter((val) => {
    return(val%2==0);}
)
console.log(newAr);
// task9
let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sum);
/*Activity4*/
// task10

for(let  i in arr){
    console.log(arr[i]);
}

// task11
arr.forEach=(val)=>{
    console.log(val);
}
/*Activity5 */
// task12
let ar=[[1,2],[2,3],[3,4]];
console.log(ar);

let c=ar[0,0];
console.log(c);
