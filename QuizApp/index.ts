import inquirer from "inquirer"
let Credentials = await inquirer.prompt([{
    type: "list",
    name: "portal",
    message: "Choose your Authentication Portal",
    choices: ['Admin Portal', 'Student Portal', 'Exit']

}]) 
if(Credentials.portal== "Admin Portal")
{
    console.log(`------------------------`);
    console.log(`Welcome to Admin Portal`)
    console.log(`------------------------`);
    
   while(1)
   {
    
    var Admin = await inquirer.prompt
    ([
    
        {
        type:"input",
        name:"Quiz1",
        message:"Enter Quiz 1 Question Here",
         },
         {
            type:"input",
            name:"C1",
            message:"Enter Quiz 1 Correct Answer Here",
             },
         {
            type:"input",
            name:"Quiz2",
            message:"Enter Quiz 2 Question Here",
         },
         {
            type:"input",
            name:"C2",
            message:"Enter Quiz 2 Correct Answer Here",
             },
        {
                type:"input",
                name:"Quiz3",
                message:"Enter Quiz 3 Question Here",
         },
         {
            type:"input",
            name:"C3",
            message:"Enter Quiz 3 Correct Answer Here",
             },
         {
            type:"list",
            name:"exit",
            message:"Do you want to exit?",
            choices:['Yes','NO']
        },

])
        if(Admin.exit == "Yes")
        {
            break;
        }
        else
        {
        continue;
        }
   }
}
   else if(Credentials.portal== "Student Portal")
   {
    console.log(`------------------------`);
    console.log(`Welcome to Student Portal`)
    console.log(`------------------------`);
    while(1)
    {
        let Student = await inquirer.prompt
        ([
            {
               
                type:"list",
                name:"CA1",
                message:"Choose Quiz 1 Correct Answer\nA \nB\nC\nD",
                choices:['A','B','C','D'],
                 },
                 {
                    type:"input",
                    name:"Quiz2",
                    message:"Enter Quiz 2 Answer Here",
                 },
                {
                        type:"input",
                        name:"Quiz3",
                        message:"Enter Quiz 3 Answer Here",
                 },
                 {
                    type:"list",
                    name:"exit",
                    message:"Do you want to exit?",
                    choices:['Yes','NO']
                },
        ])
        if(Student.exit == "Yes")
        {
            break;
        }
        else
        {
        continue;
    }
   }
}