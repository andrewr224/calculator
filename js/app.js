let digits = document.querySelectorAll('.digit');
let ops    = document.querySelectorAll('.operation');
let equals = document.querySelector('.equals');
let del    = document.querySelector('.delete');
let clear  = document.querySelector('.clear');
let input  = document.querySelector('.input');

let inputVal = '';
let outputVal;
let operand;
let operation;

digits.forEach(digit => digit.addEventListener('click', typeIn));
ops.forEach(operation => operation.addEventListener('click', selectOperation));
equals.addEventListener('click', operate);
clear.addEventListener('click', reset);
del.addEventListener('click', delLast);

function reset() {
  inputVal  = '';
  operand   = null;
  operation = null;

  display();
}

function delLast() {
  inputVal = inputVal.slice(0, inputVal.length - 1);

  display();
}

function selectOperation(e) {
  if (inputVal) {
    operation = e.toElement.innerText;

    operand  = inputVal;
    inputVal = '';

    display();
  }
}

function typeIn(e) {
  let value = e.toElement.innerText;

  if (value == '.' && inputVal.includes('.')) { return false; }

  inputVal = inputVal.concat(value);

  display();
};

function display(val = '') {
  if (val) {
    input.innerText = val;

    return;
  }

  let output = '';

  if (operand)   { output = output.concat(operand); }
  if (operation) { output = output.concat(operation); }

  output = output.concat(inputVal);

  input.innerText = output;
}

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) {
  if (a == 0 || b == 0) { return 'Zero Division Error'; }

  return a / b;
}

function operate() {
  if (!operation || !operand || !inputVal) { return; }

  let result = '';

  switch (operation) {
  case '+':
    result = add(parseFloat(operand), parseFloat(inputVal));
    break;
  case '-':
    result = subtract(parseFloat(operand), parseFloat(inputVal));
    break;
  case '×':
    result = multiply(parseFloat(operand), parseFloat(inputVal));
    break;
  case '÷':
    result = divide(parseFloat(operand), parseFloat(inputVal));
    break;
  }

  reset();
  display(result);
}

