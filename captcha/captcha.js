/** Params */
//pattern
// left
// right
// operator
"use strict";
/*
function patternChecking(pattern) {
    switch(pattern) {

    }
}

class operate {
    plus = "+";
    minus = "-";
    multiply = "*";
}

function generate(pattern, left, right, operate) {

}
*/
class Captcha {
    generate(pattern, left, right, operate) {
        let _pattern = "";
        switch (pattern) {
            case 1:
                _pattern = `${left} ${textOperand(operate)} ${numberOperand(right)}`;
                break;
            case 2:
                _pattern = `${numberOperand(right)} ${textOperand(operate)} ${left}`;
                break;
            default:
                break;
        }
        console.log(_pattern);
        return _pattern;
    }
}
exports.Captcha = Captcha;
function textOperand(n) {
    let _operate = "";
    switch (n) {
        case 1:
            _operate = "+";
            break;
        case 2:
            _operate = "+";
            break;
        case 3:
            _operate = "+";
            break;
        default:
            _operate = "WTF";
            break;
    }
    return _operate;
}
exports.textOperand = textOperand;
function numberOperand(n) {
    let decimal = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    let _rigth = decimal[n];
    return _rigth;
}
exports.numberOperand = numberOperand;
