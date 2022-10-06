/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
const arrayPositiveNumbers =[1, 2, 3, 4, 5]
console.log('Exercise 1 Positive Numbers'+ arrayPositiveNumbers )
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
const student = {
    firstName: "Nic",
    lastName: "Britz",
    email: "nicbritz3@gmail.com",
    age: 33,
};
console.log("STUDENT--->",student);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
student.hasDrivingLicense = true;
console.log("Vaild License--->", student);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
delete student.age;
console.log(student);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
const student2 = Object.assign({}, student);
student2.firstName = "Frank";
student2.surName = "Bisogno";
student2.email = "frankbisogno@gmail.com";
//HOW TO verify that this object has a different email address than the previous one.
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
{
totalShoppingCart = cartPrice >= 50 ? cartPrice : cartPrice + shippingCost 
}
let cartPrice =  20
let shippingCost = 10

let totalShoppingCart 

if (cartPrice >= 50) {
totalShoppingCart = cartPrice
} else { 
    totalShoppingCart = cartPrice + shippingCost 
}
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
totalShoppingCart = 0.8* totalShoppingCart

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
const car = {
    brand: "Mercedez-Benz",
    model: "E-Class",
    licensePlate: "CA 234-348",
    automatic: true
};
const car1 = Object.assign({}, car);
      car1.licensePlate - "CB 234-348";
      car1.automatic = false;

const car2 = Object.assign({}, car);
      car2.licensePlate - "CC 234-348"
      car2.automatic = false;

      const car3 = Object.assign({}, car);
      car3.licensePlate - "CD 234-348";
      car3.automatic = false;

const car4 = Object.assign({}, car);
      car4.licensePlate - "CE 234-348"
      car4.automatic = false; 

const car5 = Object.assign({}, car);
      car5.licensePlate - "CF 234-348";
      car5.automatic = false;

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
const arrayOfCarsForRent = ["CB 234-348", "CC 234-348", "CD 234-348", "CE 234-348", "CF 234-348"];

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
removedCarsForRent.splice(0,1)
removedCarsForRent.splice(-1,1)
console.log(removedCarsForRent)

const removedCarsForRent = arrayOfCarsForRent.pop();
console.log(arrayOfCarsForRent);
console.log(removedCarsForRent);
arrayOfCarsForRent.pop();
console.log(arrayOfCarsForRent);
arrayOfCarsForRent.shift();
console.group(arrayOfCarsForRent); 
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
const carsForSale = [
]

object1 ="CC 234-348",
object2 ="CD 234-348",
object3 ="CE 234-348"

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
