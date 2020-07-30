function factorial(n) {
  var answer = 1;

  for (var i = n; i >= 1; i--) {
    answer = answer * i;
  }
  return answer === 0 ? 1: answer;


}

function factorialWrapper() {
  let inputNumber = document.getElementById('inputNumber').value;
  inputNumber = parseInt(document.getElementById('inputNumber').value)
  const answer = factorial(inputNumber)
  document.getElementById('container').innerHTML = answer;
}