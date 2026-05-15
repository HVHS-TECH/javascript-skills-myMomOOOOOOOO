const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

console.log("Running task 11...");

let userName = 'Lewis';
let date = 2026;
let age = 15;
let pocketMoney = 500;
let birth = 2010;
let future = 10;
let half = 250;
let num3 = 3;

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
  }
function getName() {
  let name = document.getElementById("nameInput").value;

  OUTPUT.innerHTML += "<h2>Hello " + name + "!</h2>";
}

Start();