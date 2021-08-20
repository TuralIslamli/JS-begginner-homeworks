// 3) Какое число больше
// Нужно вывести окно, на каждую отдельно. Ввести два числа. В ответ вывести сообщение о том какое из них больше.

let tempOne = true;
let tempTwo = true;
let firstNum;
let secondNum;

while (tempOne) {
    firstNum = Number(prompt("Укажите первое число для сравнения со вторым."));

    if (isNaN(firstNum / 2) == false) {
        tempOne = false;
    }
    else{
        alert("Не корректно. Пожалуйста укажите верно!");
    }
}

while (tempTwo) {
    secondNum = Number(prompt("Укажите второе число для сравнения с первым."));

    if (isNaN(secondNum / 2) == false) {
        tempTwo = false;
    }
    else{
        alert("Не корректно. Пожалуйста укажите верно!");
    }
}

if(firstNum>secondNum){
    alert("Первое число больше второго.");
}
else if(secondNum>firstNum){
    alert("Второе число больше первого.");
}
else{
    alert("Числа равны.");
}