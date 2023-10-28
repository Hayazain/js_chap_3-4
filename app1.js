// Practise Exercise 4.1

// let myVariable = true;

// console.log("The value of myVariable is:", myVariable);

// if (myVariable) {
//   console.log("myVariable is true.");
// }

// if (!myVariable) {
//   console.log("myVariable is not true.");
// } else {
//   console.log("myVariable is true.");
// }

// myVariable = !myVariable;
// console.log("The value of myVariable is now:", myVariable);

// if (myVariable) {
//   console.log("myVariable is true.");
// }

// if (!myVariable) {
//   console.log("myVariable is not true.");
// } else {
//   console.log("myVariable is true.");
// }

// Practise Exercise 4.2

// let age = +prompt("enter age");

// if ( age >= 21) {
//     console.log("confirm entry to a venue and the ability to purchase alcohol");
// } else if ( age >= 19) {
//     console.log("confirm entry to the venue but deny the purchase of alcohol");
// } else {
//     console.log("you can not enter");
// }

// console.log(age);

// Practise Exercise 4.3

// let isIDValid = true;
// let message = isIDValid ? "Welcome to the venue!" : "Sorry, you can't enter the venue.";
// console.log(message);

// Practise Exercise 4.4

// let randomValue = Math.floor(Math.random() * 6);
// let userQuestion = prompt("Ask me a question:");
// let response;
// switch (randomValue) {
//   case 0:
//     response = "Yes, definitely.";
//     break;
//   case 1:
//     response = "It is highly likely.";
//     break;
//   case 2:
//     response = "Maybe, but I'm not sure.";
//     break;
//   case 3:
//     response = "It's unlikely.";
//     break;
//   case 4:
//     response = "No, definitely not.";
//     break;
//   case 5:
//     response = "I'm sorry, I don't have an answer to that.";
//     break;
//   default:
//     response = "I'm not sure how to answer that.";
//     break;
// }
// let finalResponse = `You asked: "${userQuestion}"\nMy response: ${response}`;
// console.log(finalResponse);

// Practise Exercise 4.5

// let prize = +prompt("choose a number between 0 and 10:");
// let outputMessage = "My Selection: ";

// let response;
// switch (prize) {
//   case 0:
//     response = "Congratulations! You've won a new car!";
//     break;
//   case 1:
//     response = "You've won a vacation to a tropical paradise!";
//     break;
//   case 2:
//     response = "You've won a $500 gift card to your favorite store!";
//     break;
//   case 3:
//     response = "You've won a weekend getaway at a luxury resort!";
//     break;
//   case 4:
//     response = "You've won a high-end smartphone!";
//     break;
//   case 5:
//     response = "You've won a year's supply of your favorite snack!";
//     break;
//   default:
//     response = "Sorry, no prize this time. Try again!";
//     break;
// }
// const messageToUser = outputMessage + response;
// console.log(messageToUser);

// CHAPTPER PROJECTS

// Evaluating a number game

// let userNumberGuess = +prompt('Enter a number from 1 - 10');
// let randomNumber = Math.floor(Math.random() * 10);

// if( randomNumber > userNumberGuess ){
//   console.log("you loss. The number is greater then your number."+ " " + "The Number is:" +" "+ randomNumber)
// }
// else if( randomNumber < userNumberGuess ){
//   console.log("you loss. The number is less then your number."+ " " + "The Number is:" +" "+ randomNumber)
// }
// else {
//   console.log("you won."+ " " + "The Number is:" +" "+ randomNumber)
// }

// Friend checker game

// let userName = prompt("Enter your name:");

// switch (userName) {
//   case "Haya":
//   case "Areej":
//   case "Umme Hani":
//   case "Atrooba":
//     console.log("Hello,"+" "+userName+" " +"! You are a friend.");
//     break;
//   default:
//     console.log("Sorry, I don't know you"+" "+userName +".");
//     break;
// }

// Rock Paper Scissors game

// let gameOptions = ["Rock", "Paper", "Scissors"];

// let playerIndex = Math.floor(Math.random() * 3);
// let computerIndex = Math.floor(Math.random() * 3);

// let responseMessage = `Player selected ${gameOptions[playerIndex]}. Computer selected ${gameOptions[computerIndex]}. `;

// if (playerIndex === computerIndex) {
//   responseMessage += "It's a tie!";
// } else {

//   if (
//     (playerIndex === 0 && computerIndex === 2) || 
//     (playerIndex === 1 && computerIndex === 0) || 
//     (playerIndex === 2 && computerIndex === 1)    
//   ) {
//     responseMessage += "Player wins!";
//   } else {
//     responseMessage += "Computer wins!";
//   }
// }

// console.log(responseMessage);