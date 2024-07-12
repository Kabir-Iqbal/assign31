// 31.QNo
// No Users: 
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let list : string [] = ["Ali","Aamir","Hashim","Umair","Admin"]

// remove all names from array 
list = []
if (list.length > 0) {
            console.log(`Hello ${list}, Would you like to see status report ?`);
        
    }else{
            console.log("We need to find some  users");
        }