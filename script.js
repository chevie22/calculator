let displayText = "0";

let operator;
let firstNum;
let secondNum;
let answer;

function operate(operator, num1, num2){
    switch(operator){
        case " + ":
            return add(num1, num2);
        case " - ":
            return subtract(num1, num2);
        case " * ":
            return multiply(num1, num2);
        case " / ":
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
const display = document.querySelector("#display");
display.innerHTML = (displayText);

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

        if(e.target.classList.contains("equals")){
            secondNum = (displayText);
            if(secondNum){
                if(operator == " / " && secondNum == 0){
                    displayText = "Boang";
                    display.innerHTML = (displayText);
                }
                else{
                    answer = operate(operator, Number(firstNum), Number(secondNum));
                    displayText = answer;
                    display.innerHTML = (displayText);
                }
            }
            console.log(`${firstNum} ${operator} ${secondNum}`);
        }

        if(e.target.classList.contains("operator")){
            if(!firstNum && !secondNum && !operator){
                if(firstNum == null){
                    firstNum = (displayText);
                }
                else{
                    secondNum = (displayText);
                }
                operator = `${e.target.id}`;
                displayText = "";
            }
            else{
                secondNum = (displayText);
                answer = operate(operator, Number(firstNum), Number(secondNum));
                firstNum = operate(operator, Number(firstNum), Number(secondNum));
                secondNum = undefined;
                operator = `${e.target.id}`;
                displayText = "";
            }
            console.log(`${firstNum} ${operator} ${secondNum}`);

        }

        if(e.target.classList.contains("number")){
            if(displayText.charAt(0) == "0"){
                displayText = `${e.target.id}`
                display.innerHTML = (displayText);
            }else{
                displayText = `${displayText}${e.target.id}`
                display.innerHTML = (displayText);
            }
            console.log(`${firstNum} ${operator} ${secondNum}`);
        }

        if(e.target.classList.contains("clear")){
            displayText = "0";
            firstNum = undefined;
            secondNum = undefined;
            operator = undefined;
            display.innerHTML = (displayText);
        }
        target.style.borderColor = "#aeaeae";
    })
})