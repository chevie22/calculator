let displayText;

let firstNum;
let secondNum;
let operator;

function operate(operator, num1, num2){
    switch(operator){
        case operator == "+":
            return add(num1, num2);
        case operator == "-":
            return subtract(num1, num2);
        case operator == "*":
            return multiply(num1, num2);
        case operator == "/":
            return divide(num1, num2);
    }
}


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1 ,num2){
    return num1 / num2;
}

const calculatorContainer = document.querySelector("#calculatorContainer")
const buttons = document.querySelectorAll(".button");

calculatorContainer.addEventListener("mouseover", (e) =>{
    let target = e.target;
    if(e.target.classList.contains("button")){
        target.style.background = "#aeaeae";
        target.style.borderColor = "#aeaeae"
    }
});

buttons.forEach((element) =>{
    element.addEventListener("mouseout", (e) =>{
        let target = e.target;
        target.style.background = "#e8e2e1";
        target.style.borderColor = "#e8e2e1";
    });

    element.addEventListener("mousedown", (e) =>{
        let target = e.target;
        target.style.borderColor = "#ebebeb";
    })

    element.addEventListener("mouseup", (e) =>{
        let target = e.target;
        target.style.borderColor = "#aeaeae";
    })
})