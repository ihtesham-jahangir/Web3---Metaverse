import inquirer from "inquirer";

let answer = await inquirer.prompt(
    [
        {
            type: "text",
            name: "num1",
            message: "Input First Number: "
        },
  
        {
            type: "text",
            name: "num2",
            message: "Input Second Number: "
        } 
          , {
            type: "text",
            name: "op",
            message: "choose operator(+,-,*,/): "
        }
            
        

    ]);
switch (answer.op) 
{
    case "+":
        console.log(parseInt(answer.num1) + parseInt(answer.num2));
        break;
    case "-":
        console.log(parseInt(answer.num1) - parseInt(answer.num2));
        break;
    case "*":
        console.log(parseInt(answer.num1) * parseInt(answer.num2));
    break;
    case "/":{
        if(answer.num2==0)
        {
            console.log("error! num2 can't be 0");
        }
        else if(answer.num2!=0)
        {
            console.log(parseInt(answer.num1) / parseInt(answer.num2));
        }
        else
        {
            console.log("error");
        }
    }
}