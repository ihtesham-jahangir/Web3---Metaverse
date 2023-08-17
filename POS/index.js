"use strict";
const a = require('readline-sync');
let id = a.question("Enter Product ID:\n");
while (1) {
    let id = a.question("Enter Product ID:\n");
    id.push;
    console.log(`
    ********************************
    *                              *
    * Product Added Successfully!  *
    *                              *
    ********************************
    `);
    let choice = a.question("Exit[E]\nAdd More[A]\n\n");
    if (choice == 'E' || choice == 'e')
        break;
    else if (choice == 'a' || choice == 'A') {
        continue;
    }
    else {
        console.log(`Invalid Statement`);
        break;
    }
}
for (var i = 0; i < id.length; i++) {
    console.log(`${id[i]}`);
}
