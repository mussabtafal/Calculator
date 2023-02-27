let result = document.getElementsByClassName("display")[0];
let selectedOp;
let firstNum;
let secondNum;
let dec = false;

function setOp(element) {
    selectedOp = element.innerText;
    secondNum = firstNum;
    firstNum = null;
}

function onPress(element) {
    console.log(dec);
    if(dec){
        firstNum = firstNum + element.innerHTML;
        result.innerHTML = firstNum;
        dec = false
        return;
    }
    firstNum = Number(element.innerText);
    result.innerHTML = firstNum;
}

function decimal() {
    dec = true;
    result.innerHTML = firstNum + ".";
    firstNum = result.innerHTML;
}

function calculator() {
    switch(selectedOp){
        case '+':
            console.log(Number(result.innerText));
           result.innerText = Number(result.innerText) + Number(secondNum);
           break;
        case '-':
            result.innerText = Number(result.innerText) - Number(secondNum);
            break;
        case 'x':
            result.innerText = Number(result.innerText) * Number(secondNum);
            break;
        case '/':
            result.innerText = Number(result.innerText) / Number(secondNum);
            break;
    }
    firstNum = result.innerHTML;
    selectedOp = null;
};

function clr() {
    firstNum = null;
    secondNum = null;
    selectedOp = null;
    result.innerHTML = '0';
}