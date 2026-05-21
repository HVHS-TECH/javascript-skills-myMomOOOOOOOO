const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

console.log("Running task 14...");

let userName = 'Lewis';
let date = 2026;
let age = 16;
let pocketMoney = 500;
let birth = 2010;
let future = 10;
let half = pocketMoney / 2;
let num3 = 3;
let chocolateMessages = [
  "You loath chocolate",
  "Chocolate is meh",
  "Chocolate is pretty good",
  "Chocolate is the best thing EVER!!!!"
];
/****************************
Functions
****************************/

  function Start(){
    OUTPUT.innerHTML =
  "<p>Hi " + userName + "</p>" +

  "<p>As of " + date + " you are " + age + " years old.</p>" +

  "<p>You were born in " + birth + ".</p>" +

  "<p>In 10 years you will be " + (age + future) + " years old.</p>" +

  "<p>You have $" + pocketMoney + ".</p>" +

  "<p>You spend half of your money, now you have $" + (pocketMoney - half) + ".</p>" +

  "<p>Then you get $3, now you have $" + (half + num3) + ".</p>";
   function Welcome(){
    OUTPUT.innerHTML += "<h2>Welcome to the shop</h2>";
  }
  Welcome()
  
    function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}

displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);

OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";

if (pocketMoney < 4) {

  OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";

} else {

  OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";

  let change = calculateChange(pocketMoney, 4);

  OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";

}
}

function getName() {
  let name = document.getElementById("nameInput").value;

  OUTPUT.innerHTML += "<h2>Hello " + name + "!</h2>";
}

function updateInfo() {

  age = Number(document.getElementById("ageInput").value);

  pocketMoney = Number(document.getElementById("moneyInput").value);

  half = pocketMoney / 2;

}

function calculateChange(_money, _price){

  return _money - _price;

}

function showChocolateMessage() {

  let choice = Number(document.getElementById("chocolateInput").value);

  OUTPUT.innerHTML += "<p>" + chocolateMessages[choice] + "</p>";

}

Start();
