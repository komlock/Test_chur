let authBox = document.querySelector('.auth-box');
let userDigits = [];
let boxDigits = document.getElementsByClassName('digit');

moveOnMax =function (field, nextFieldID) {
    if (field.value.length == 1) {
        document.getElementById(nextFieldID).focus();
    }
}

let firstPin = document.querySelector('#start');
firstPin.focus();

render();

function render() {
    for (let i = 0; i < boxDigits.length; i++) {
        boxDigits[i].value = '';
        
    }
    for (let i = 0; i <=userDigits.length - 1; i++) {
        boxDigits[i].value = userDigits[i]; 
    }
}

let pinPad = document.getElementsByClassName("pad");

function addNumber() {
    if (this.innerHTML == "&lt;") {
        userDigits.pop()
    } else if (this.innerHTML == "-") {
        userDigits = [];
    } else {
        if (userDigits.length < 4) {
            userDigits.push(this.innerHTML);
        } 
        if (userDigits.length == 4) {
            authBox.submit();
        }
    }
    render();
}

for (let i = 0; i < pinPad.length; i++) {
    pinPad[i].addEventListener('click', addNumber);
}