const fib_n = parseInt(prompt('enter number fib'));

const result = calcFib(fib_n);

function calcFib(fib_n) {
  let fib_1 = 1;
  let fib_2 = 1;
   
  for (var i = 3; i <= fib_n; i++) {
    const fib_n = fib_1 + fib_2;
    fib_1 = fib_2;
    fib_2 = fib_n;
  }
   
  return fib_2;
}

document.write('відповідь:' + '<br>' + result);