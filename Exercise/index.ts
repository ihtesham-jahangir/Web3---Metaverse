
var person = ["Ali","Sibit","Saad"]
var message = "You are inviting at Dinner in Ihtesham's Palace"
console.log(`Old Invition List`);
for(const guest of person)
console.log(guest);

const nocome = "Saad";
console.log(`\n${nocome} can't come into the dinner.`);

const newg = "Ahmad Nawaz"

const index = person.indexOf(nocome);
if(index!==-1)
{
    person[index] = newg;
}

console.log("\nUpdated guest list:");
for (const guest of person) {
  console.log(guest);
}


console.log("Good news! We found a bigger dinner table!");

person.unshift('Ahmad Ali') 
person.splice(Math.floor(person.length / 2), 0, 'Qasam'); 
person.push('Tanveer'); 

console.log("\nInvitation messages:");
for (const guest of person) {
  console.log(`Dear ${guest}, please join us for dinner.`);
}
console.log("\nUnfortunately, we can only invite two people for dinner.");

// Remove guests until only two remain
while (person.length > 2) {
  const removedGuest = person.pop();
  console.log(`Sorry, ${removedGuest}. We can't invite you to dinner.`);
}

// Print message to the remaining two guests
console.log(`\nDear ${person[0]}, you're still invited.`);
console.log(`Dear ${person[1]}, you're still invited.`);

// Empty the list
person.length = 0;

// Print the empty list
for (const guest of person)
console.log("\nFinal guest list:", guest);

/*
var person = ["Ali","Sibit","Saad"]
var message = "You are inviting at Dinner in Ihtesham's Palace"
for(var i=0 ; i<3 ; i++)
console.log(`${person[i]}  ${message}`);

*/



/*var veh = ["BMW","Kawasaki","Xyz"];
var mode = ["Car","Bike","truck"]
var message = "i'be happy if i have one ";

    for (var i= 0 ; i<3 ; i++){
    console.log(`${message} ${veh[i]} ${mode[i]}  `);
    }

*/



/*
var f_name = ["ihtesham","ali","ahmad"];
var message = "this is Demo Messsage";
for(var i = 0 ; i < 3 ; i++ )
console.log(`${f_name[i]} ${message}`);

*/