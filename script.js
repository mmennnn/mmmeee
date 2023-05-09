// 계산기 로직을 작성합니다.

function calculate() {

  var num1 = parseFloat(document.getElementById('num1').value);

  var num2 = parseFloat(document.getElementById('num2').value);

  var operator = document.getElementById('operator').value;

  var result;

  if (operator === '+') {

    result = num1 + num2;

  } else if (operator === '-') {

    result = num1 - num2;

  } else if (operator === '*') {

    result = num1 * num2;

  } else if (operator === '/') {

    result = num1 / num2;

  }

  document.getElementById('result').innerHTML = result;

}

// 계산기를 초기화하는 함수입니다.

function resetCalculator() {

  document.getElementById('num1').value = '';

  document.getElementById('num2').value = '';

  document.getElementById('operator').selectedIndex = 0;

  document.getElementById('result').innerHTML = '';

}

