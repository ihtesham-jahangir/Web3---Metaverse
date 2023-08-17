var person = ["Ali", "Sibit", "Saad"];
var message = "You are inviting at Dinner in Ihtesham's Palace";
console.log("Old Invition List");
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var guest = person_1[_i];
    console.log(guest);
}
var nocome = "Saad";
console.log("\n".concat(nocome, " can't come into the dinner."));
var newg = "Ahmad Nawaz";
var index = person.indexOf(nocome);
if (index !== -1) {
    person[index] = newg;
}
console.log("\nUpdated guest list:");
for (var _a = 0, person_2 = person; _a < person_2.length; _a++) {
    var guest = person_2[_a];
    console.log(guest);
}
console.log("Good news! We found a bigger dinner table!");
person.unshift('Ahmad Ali');
person.splice(Math.floor(person.length / 2), 0, 'Qasam');
person.push('Tanveer');
console.log("\nInvitation messages:");
for (var _b = 0, person_3 = person; _b < person_3.length; _b++) {
    var guest = person_3[_b];
    console.log("Dear ".concat(guest, ", please join us for dinner."));
}
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests until only two remain
while (person.length > 2) {
    var removedGuest = person.pop();
    console.log("Sorry, ".concat(removedGuest, ". We can't invite you to dinner."));
}
// Print message to the remaining two guests
console.log("\nDear ".concat(person[0], ", you're still invited."));
console.log("Dear ".concat(person[1], ", you're still invited."));
// Empty the list
person.length = 0;
// Print the empty list
for (var _c = 0, person_4 = person; _c < person_4.length; _c++) {
    var guest = person_4[_c];
    console.log("\nFinal guest list:", guest);
}
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
