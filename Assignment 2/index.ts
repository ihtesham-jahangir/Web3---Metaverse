
const inputa = require('readline-sync');

const s1 = inputa.question("Enter C++ Numbers :");
const s2 = inputa.question("Enter Operating System Numbers :");
const s3 = inputa.question("Enter Database Numbers :");
const sub1 = parseFloat(s1);
const sub2 = parseFloat(s2);
const sub3 = parseFloat(s3);

const sum = sub1 + sub2 + sub3;


function grade(s1:number,s2:number,s3:number)
{
    
  
    var total:number = sum/3;
    console.log(`${total}`);
    if(total>=91 && total<=100)
        console.log(`A+`);
    else if(total>=81 && total<91)
        console.log(`A`);
    else if(total>=71 && total<81)
        console.log(`B+`);
    else if(total>=61 && total<71)
        console.log(`B`);
    else if(total>=51 && total<61)
        console.log(`C+`);
    else if(total>=41 && total<51)
        console.log(`C`);
    else if(total>=33 && total<41)
        console.log(`D`);

    else if(total>=0 && total<33)
        console.log(`F`);
    else
    console.log(`Invalid Value`);
}
if(sub1>=100 && sub2>=100 && sub3 >= 100)
{
    console.log(`Each Subject less then 100`);
}
else{
grade(s1,s2,s3)
}
