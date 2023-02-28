function rollDice(num) {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
    const randomDiceImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png
    const path = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
    const imgclass = ".img" + num;
    document.querySelector(imgclass).setAttribute("src", path);

    return randomNumber;
}
rollDice(1);
rollDice(2);

var Dice1 = rollDice(1);
var Dice2 = rollDice(2);

if (Dice1 > Dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (Dice2 > Dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}