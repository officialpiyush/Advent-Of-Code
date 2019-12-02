const fs = require("fs");

let totalFuel = 0;
let totalFuelArray = [];

const massArray = fs.readFileSync("masses.txt", "utf8").split("\n");

const getMass = (mass) => {
    const f = Math.floor(mass / 3) - 2;

    if(f > 0) {
        totalFuelArray.push(f)
        return getMass(f)
    } else {
        return null
    }
};

massArray.forEach(getMass)

totalFuelArray.forEach(f => totalFuel += f)

console.log(totalFuel);


