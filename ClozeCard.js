var inquirer = require("inquirer");

var ClozeCard = function(text, cloze){
  this.text = text;
  this.cloze = cloze;
}

var makeCard = function(){
  inquirer.prompt([
      {
        name: "fullText",
        message: "Enter the full text: "
      },
      {
        name: "cloze",
        message: "Enter the part you want to delete: "
      }
    ]).then(function(cardsInfo){
      ClozeCard.prototype.partial = cardsInfo.fullText.replace(cardsInfo.cloze,"...");
      var userCard = new ClozeCard(userCard.partial, cardsInfo.cloze);
      console.log("Fill in the blank: \n" + userCard.partial);
      console.log("The answer is: \n" + this.cloze);
  })
}
makeCard();

module.exports = ClozeCard;
