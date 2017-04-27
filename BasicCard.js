var inquirer = require("inquirer");

var BasicCard = function(front, back){
  this.front = front;
  this.back = back;
  this.printCard = function(){
    console.log(this.front);
    console.log(this.back);
  }
}

// function cardNum(){
//   inquirer.prompt({
//     name: "cardNum",
//     message: "How many cards would you like to make?"
//   }).then(function(userInput){
//     var numberOfCards = parseInt(userInput.cardNum);
//     console.log("You're going to make " + numberOfCards + " cards.");
//     return numberOfCards;
//   })
// }
// cardNum();

var count = 0;
var makeCard = function(){
  if(count<2){
    inquirer.prompt([
      {
        name: "front",
        message: "Enter a question: "
      },
      {
        name: "back",
        message: "Enter the answer: "
      }
    ]).then(function(cardsInfo){
      var userCard = new BasicCard(cardsInfo.front, cardsInfo.back);
      userCard.printCard();
      count++;
      makeCard();
    })
  } else {
    console.log("You've made 2 cards!")
  }
}
makeCard();

module.exports = BasicCard;
