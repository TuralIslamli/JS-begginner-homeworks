// 8) Функция, которая возвращает число, которые мы отправили, только в кубе

function Cub() {
    let temp = true;
    let userNum;
    while (temp) {
        userNum = Number(prompt("Укажите число до чтобы возвести в куб."));
        if (isNaN(userNum / 2) == true) {
            alert("Некорректно, укажите число!");
        } else {
            temp = false;
        }
    }
    userNum=userNum*userNum*userNum;
    return userNum;
}

let firstNum=Cub();
alert("Куб числа равен:"+firstNum);