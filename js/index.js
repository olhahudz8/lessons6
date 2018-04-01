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



// function fib(n){
// 	if (n==1||n==2) return 1;
// 	else return fib(n-2)+fib(n-1);		
// 	}
// 	var userNum=+prompt('Введите порядковый номер числа Фибоначчи');
// alert(fib(userNum));


var n = 10; // Сколько элементов хотим получить
var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));
// slice отрезает от массива первые n элементов, если n < 2



