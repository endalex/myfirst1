const myfirst = require("./myfirst");
const mysecond = require("./mysecond");


// const result = myfirst.myMultiplier(15);
// console.log(result);

const result = myfirst.myMultiplier(14);
console.log("The value of 14 when passed through the myMultiplier function is:", result);

const result2 = mysecond.myMultiplier(14);
console.log("The value of 14 when passed through the myMultiplier function is:", result2);


// const events = require("events");
// const fs = require("fs");
// // // There is an EventEmitter() class defined inside the events module  
// const emitter = new events.EventEmitter(); 

// try {
// fs.writeFile("results.txt", "The value of 14 when passed through the myMultiplier function is:", result2);
// emitter.emit('myfirst') } catch (error) {
// console.log("Couldn't create the file");
// }



const fs = require('fs');

fs.writeFile("result.txt", "Hello every!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

// Or
// fs.writeFileSync('result.txt-sync', 'Hey there!');

// const fs = require('fs');

// fs.writeFile("/tmp/test", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 

// // Or
// fs.writeFileSync('/tmp/test-sync', 'Hey there!');







