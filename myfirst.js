console.log('my first module');


 function myMultiplier(num) {
    return num * 2;
}
 console.log(myMultiplier(5))

module.exports.myMultiplier = myMultiplier;