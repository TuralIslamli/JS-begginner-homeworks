// 9) Функция, которая возвращает факториал числа

function Factorial() {
    let temp = true;
    let userNum;
    while (temp) {
        userNum = Number(prompt("Укажите число до чтобы вычислить факториал."));
        if (isNaN(userNum / 2) == true) {
            alert("Некорректно, укажите число!");
        }
        else{
            temp = false;
        }
    }
    for(i=userNum-1; i>0; i--){
        userNum=userNum*i;
    }
    return userNum;
}

let firstNum=Factorial();
alert("Факториал числа равен:"+firstNum);