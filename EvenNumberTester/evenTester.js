//Not in recursive mode
/*function isEven (number) {
    if(number >= 0) {

        while(number != 0 && number != 1){
            number -= 2;
        }

        if(number == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid number";
    }
}*/

/*
//In recursive mode
function isEven(number) {

    if (number === 0) {
        return "true";
    } else if (number === 1) {
        return "false";
    } else if (number < 0) {
        return "Invalid number";
    } else {
        return isEven(number - 2);
    }

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
*/

//Testing closures
function rollTheDice() {
    let randomNumber = Number((Math.random() * 6 + 1).toFixed(0));

    function displayNumber() {
        console.log(randomNumber);
    }

    return displayNumber;
}

/*
let myDice = rollTheDice();
myDice();
*/

function multiply(num1) {

    return function (num2) {
        return num1 * num2;
    }
}

let myResult = multiply(2);

console.log(myResult(10));

function area(x, y) {
    return x * y;
}

console.log(area(2, 2));


const anonymousArea = function (x, y) {
    return x * y;
}

console.log(anonymousArea(2, 2));

(function () {
    let x = 3;
    let y = 3;

    console.log(x * y);
})();