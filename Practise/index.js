"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
const a = require("readline-sync");
// while(1){
// var n = a.questionInt("Enter the first number: ")
// var nn = a.questionInt("Enter the second number: ")
// var choice = a.questionInt("Enter your choice: 1. Addition 2. Subtraction 3. Multiplication 4. Division: ")
// switch(choice)
// {
//     case 1:
//         {
//             console.log(`The sum of ${n} and ${nn} is ${sum(n,nn)}`);
//         } break;
//     case 2:
//         {
//             console.log(`The difference of ${n} and ${nn} is ${sub(n,nn)}`);
//         }
//         break;
//         case 3:
//             {
//                 console.log(`The product of ${n} and ${nn} is ${mul(n,nn)}`);
//             }
//             break;
//             case 4:
//                 {
//                     console.log(`The division of ${n} and ${nn} is ${div(n,nn)}`);
//                 }
//                 break;
//             }
//             var ch = a.question("Do you want to continue? \n(Y) Yes\n(N) No ")
//             if(ch=='y'||ch=='Y')
//             {
//                 continue;
//             }
//             else if(ch=='n'||ch=='N')
//             {
//                 break;
//             }
//             else 
//             {
//                 console.log(`Invalid choice`);
//                 break;
//             }
//             }
sum_1.car.type = a.question("Enter the type of car: ");
sum_1.car.model = a.question("Enter the model of car: ");
sum_1.car.matter = a.question("Enter the matter of car");
sum_1.car.location = a.question("Enter the Location of car");
console.log(`The type of car is ${sum_1.car.type}\nThe model of car is ${sum_1.car.model}\nThe matter of car is ${sum_1.car.matter}\nThe location of car is ${sum_1.car.location}`);
// Output:
