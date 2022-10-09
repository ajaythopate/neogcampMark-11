const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");
const errMsg = document.querySelector("#errMsg");

const calculateSum = (date) => {
    let sum = 0;
    date = date.replaceAll("-", "");
    for (let digit of date) {
        sum = sum + Number(digit);
    }
    return sum;
}


const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
    console.log(sumOfDate, numberToCheck);
    if (sumOfDate % numberToCheck === 0) {
        return showMessage('Your Birthday is Lucky!! ');
    }
    showMessage(' sorry!! Your birthday is not lucky');
}


const showMessage = (message) => {
    displayMessage.innerText = message;

};

const handleAllCalculations = () => {
    const date = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    if (date && numberToCheck) {
        const sumOfDate = calculateSum(date);
        checkIsNumberLucky(sumOfDate, numberToCheck);
    } else {
        showMessage("Please enter both the fields");
    }

}

const handleKeyUp = () => {
    if (luckyNumber.value < 0) {
        errMsg.innerHTML = "Negative value is not allowed."
        checkButton.disabled = true;
    } else {
        errMsg.innerHTML = "";
        checkButton.disabled = false;
    }
}
checkButton.addEventListener("click", handleAllCalculations);
luckyNumber.addEventListener('keyup', handleKeyUp)