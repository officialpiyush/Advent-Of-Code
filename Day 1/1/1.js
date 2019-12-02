const fs = require("fs");

let totalFuel = 0;

const massArray = fs.readFileSync("masses.txt", "utf8").split("\n");


for (let i = 0; i < massArray.length; i++) {
    totalFuel += (Math.floor(massArray[i] / 3) - 2)
}

console.log(totalFuel);