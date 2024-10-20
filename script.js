const greeting = "  Wel0come to the future  ";
const array = greeting.trim().split(" ");
const result = array.slice(1, array.length - 1).join(" "); 
console.log(result);
