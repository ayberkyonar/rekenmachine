let headerButton = document.querySelector('body');
let myButtons = document.querySelector('.themeToggle');

function changeBackground(){
    headerButton.classList.toggle ('bg_dark');
}

let display='0';
let operator=null;
let firstValue= 0;
let secondValue= 0;
let result= 0;

let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

buttonsElement.addEventListener('click', handleClick);
showDisplay();

function handleClick(event)
{
    const element=event.target;

    switch(element.className)
    {
        case 'btn-number':
            handleNumber(element);
            break;
        case 'btn-operator':
            handleOperator(element);
            break;
        case 'btn-equal':
            handleEqual(element);
            break;
        case 'btn-clear':
            handleClear(element);
            break;
    }
}

function handleNumber(el)
{
    let number=el.innerHTML;

    if(display==='0'){
        display=number;
    }
    else{
        display=display+number;
    }

    showDisplay();
} 

function handleOperator(el) {

    firstValue = display;
    display = "0";
    operator=el.innerHTML;
    showDisplay();
}

function handleEqual () {
    secondValue=display;
    display = "0";
    let one = parseFloat(firstValue);
    let two = parseFloat(secondValue);
    if (operator === "+") {
        result = one+two;
    }else if(operator === "-") {
        result = one-two;
    }else if(operator === "*") {
        result = one*two;
    }else if(operator === "/") {
        result = one/two;
    }
    display=result;
    showDisplay();

}

function handleClear (el) {
    display='0';
    operator= 0;
    firstValue= 0;
    secondValue= 0;
    result= 0;
    displayElement.innerHTML = 0;
    showDisplay;
}

function showDisplay(){
    displayElement.innerHTML=display;
}