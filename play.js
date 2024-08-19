let name = "John";// declaring and assignment variable
let age = 25;
let hasHobby = true;
let hobbies = ["reading", "Coding", "Gaming"];// this an array

// accessing array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);
const fullName = "John Doe";
 
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    );
}

// funstion to summarize the name, age and hobbies bool.
// console.log(summarizeUser(name, age and hashobbies));

function add(x, y){
    // let sum = x + y;

    return x + y;
}
// function to add
//console.log(add(1,1)); =2
// looping through array
// method 1
for (let hobby of hobbies){
    console.log(hobby);
}

// method 2 
hobbies,mop((hobby) => {
    console.loh(hobby);
});

// method 3
hobbies.forEach((hobby)=> {
    console.log(hobby);
});


// this is a function
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    );
}


const person = {
    name: "John", //key:pair= value
    age: 25,
    greet: function(){
        console.log("Hello, I am "+ person.name);
    },
};

if (age > 60) {
    console.log("You are a senior!");
} else if (age > 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}
console.log(fullName);
console.log(person);
console.log(hobbies);
console.log(summarizeUser(name, age, hasHobby));
console.log(summarizeUser("Jane", 30, true));