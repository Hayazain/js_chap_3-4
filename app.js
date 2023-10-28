// practice exercise 3.1:

let arr = ["milk", "bread", "apples"];
arr.splice(1, 1, "bananas");
console.log("length of arr:", arr.length);
console.log(arr);

// practice exercise 3.2:

// let fruits = ["milk", "bread", "apples"];
// console.log(fruits);
// fruits.splice(1, 1, "bananas", "eggs");
// console.log(fruits);
// fruits.splice(3,1);
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// let findIndex = fruits.indexOf("milk");
// console.log(findIndex);
// fruits.splice(1, 0, "carrot", "lettuce");
// console.log(fruits);

// let drink = ["juice", "pop", "juice", "pop"];
// let newArr = fruits.concat(drink);
// console.log(newArr);
// let findLastIndex = fruits.lastIndexOf("pop");
// console.log(findLastIndex);

// practice exercise 3.3:

// let originalArray = [1, 2, 3];
// let nestedArray = [originalArray, originalArray, originalArray];
// console.log(nestedArray);
// let valueFromNestedArray = nestedArray[1][1];
// console.log(valueFromNestedArray);

// practice exercise 3.4:

// let myCar = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "red",
//   };
  
//   let color = "red";
//   myCar[color] = "black";

//   let forSale = "forSale";
//   myCar[forSale] = true;
  
//   console.log("Make:", myCar.make);
//   console.log("Model:", myCar.model);
//   console.log("Year:", myCar.year);
//   console.log("Color:", myCar[color]);
//   console.log("For Sale:", myCar[forSale]);
  
// practice exercise 3.5:

// let people = {
//     friends: [],
//   };
  
//   let friend1 = {
//     firstName: "Umm-e-hani",
//     lastName: "Hussain",
//     ID: 1,
//   };
  
//   let friend2 = {
//     firstName: "Areej",
//     lastName: "Siddique",
//     ID: 2,
//   };
  
//   let friend3 = {
//     firstName: "Atrooba",
//     lastName: "Arif",
//     ID: 3,
//   };

//   people.friends.push(friend1, friend2, friend3);
//   console.log(people);

// CHAPTPER PROJECTS

// Manipulating an array

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];

// theList.shift();
// theList.pop();
// theList.unshift("First");
// theList.splice(3,1,"hello world");
// theList.splice(2,1,"Middle");
// theList.push("Last");
// theList.splice(4,3,);

// console.log(theList);

// Company product catalog

// let inventory = [];

// let item1 = {
//   name: "Laptop",
//   model: "XPS 15",
//   cost: 1200,
//   quantity: 10,
// };
// let item2 = {
//   name: "Smartphone",
//   model: "iPhone 13",
//   cost: 1000,
//   quantity: 15,
// };
// let item3 = {
//   name: "Tablet",
//   model: "iPad Air",
//   cost: 500,
//   quantity: 20,
// };

// inventory.push(item1, item2, item3);
// console.log("Inventory:", inventory);

// let thirdItemQuantity = inventory[2].quantity;
// console.log("Quantity of the third item:", thirdItemQuantity);
