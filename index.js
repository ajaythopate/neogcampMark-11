const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function compareValues(sum, luckyNumber) {

    if (sum % luckyNumber === 0) {
        outputBox.innerText = "your birthday is lucky";
    }
    else {
        outputBox.innerText = "your birthday is not lucky";


    }
}

function CheckBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculatesum(dob);

    if (sum && dob)
        compareValues(sum.luckyNumber.value)
    else
        outputBox.innerText = "plese enter both the fields";
    console.log()

}

function calculatesum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.lenght; index++) {
        sum = sum + Number(dob.charAt(index));

    }

    return sum;
}

checkNumberButton.addEventListener("click", CheckBirthDateIsLucky)
console.log()
