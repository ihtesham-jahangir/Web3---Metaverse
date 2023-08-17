"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = exports.div = exports.mul = exports.sub = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;
function mul(a, b) {
    return a * b;
}
exports.mul = mul;
function div(a, b) {
    if (b == 0) {
        console.log(`Error: Cannot divide by zero`);
    }
    else {
        return a / b;
    }
}
exports.div = div;
exports.car = {
    type: "",
};
